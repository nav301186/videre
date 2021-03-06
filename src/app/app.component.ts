import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Stat } from './stat';
import { MatrixService } from './matrix.service';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import * as d3 from 'd3';
import * as venn from 'venn.js';
import * as _ from 'underscore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  pairs_groups = [];

  constructor(private matrixService: MatrixService) {
  }

  totalNumberOfDaysPaired(stats : Stat[], name: string){
    let total_number_of_days_paired = stats.map(stat => stat.days_paired).reduce((c,p) => c + p);
    let stats_for_member = stats.filter(stat => stat.first_pair === name || stat.second_pair == name).map(stat => stat.days_paired);
    let i_p =  stats_for_member.reduce((c, p) => c + p)
    return (i_p/total_number_of_days_paired)*100
  }

  ngAfterViewInit() {
    this.matrixService.getPairingStats()
      .subscribe(result => {
        // result = _.take(result, result.length/2)
        let all_names = [];

        result.forEach(r => {
          all_names.push(r.first_pair);
          all_names.push(r.second_pair);
        });

        let uniquePairs = _.uniq(all_names);

        result = _.sortBy(result, function(o) {o.days_paired })

        this.pairs_groups = _.map(uniquePairs, function(name) {
          return {name: name,  pairs: _.filter(result, r => r.first_pair == name || r.second_pair == name) }})

      let cardGroup = document.createElement('div');
      cardGroup.className = 'card-columns';
      document.getElementsByTagName('body')[0].appendChild(cardGroup);

        this.pairs_groups.forEach(grp => this.drawChart(grp, uniquePairs))
      });
  }

  drawChart(group, uniquePairs){
      let result = group.pairs;
      let all_sets  = [];

    let all_memeber_in_grp = _.unique( _.flatten(result.map(pair => {
      let list = [];
      list.push(pair.first_pair);
      list.push(pair.second_pair);
      return list;
    })));


    let non_pairing_members = uniquePairs.filter(name => !_.contains(all_memeber_in_grp, name));
    // non_pairing_members.forEach(name => {
    // all_sets.push({ sets: [name], size: 100});
    // all_sets.push({ sets: [group.name], size: 0});
    // })
    // let npm_data = non_pairing_members.forEach(npm => {
    //   let set = {sets: [npm], size: 500};
    //   all_sets.push(set);
    // });

    console.log(non_pairing_members)

      console.log(group)
        let sets = result.forEach(stat => {
          if(stat.first_pair != stat.second_pair){
            all_sets.push({ sets: [stat.first_pair], size: this.totalNumberOfDaysPaired(result, stat.first_pair)*80 });
            all_sets.push({ sets: [stat.second_pair], size: this.totalNumberOfDaysPaired(result, stat.second_pair)*80});
            all_sets.push({ sets: [stat.first_pair, stat.second_pair], size: stat.days_paired*50 });
          }
        })

      let id =  group.name;
      let iDiv = document.createElement('card');
      iDiv.id = id;
      iDiv.className = 'card pull-left';
      document.getElementsByClassName('card-columns')[0].appendChild(iDiv);

        let chart = venn.VennDiagram()
        .wrap(false)
        .width(550)
        .height(750)

      let div_id = "#" + id

        d3.select(div_id).datum(all_sets).call(chart);
        var colours = ['red', 'green', 'blue', "yellow", "yellow", ,"skyblue", "brown", "magenta"];
      // document.getElementsByClassName("card").style.color = "red";
         d3.selectAll(div_id + " .venn-circle path")
                .style("fill-opacity", 0.1)
                .style("stroke-width", 5)
                .style("stroke-opacity", .5)
                .style("left-margin", 0)
                .style("stroke", function(d,i) { return colours[i%7]; });

            d3.selectAll(div_id + " .venn-circle text")
                .style("fill", "black")
                .style("font-size", "30px")
                .style("font-weight", "300");
    }
}
