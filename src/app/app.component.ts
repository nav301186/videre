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

  constructor(private matrixService: MatrixService) {
  }

  totalNumberOfDaysPaired(stats : Stat[], name: string){
    let stats_for_member = stats.filter(stat => stat.first_pair === name || stat.second_pair == name).map(stat => stat.days_paired);
    return stats_for_member.reduce((c, p) => c + p)
  }

  ngAfterViewInit() {
    this.matrixService.dummyData()
      .subscribe(result => {
        // result = _.take(result, result.length/2)
        let uniquePairs = result.map(stat => stat.first_pair);
        result = _.sortBy(result, function(o) {o.days_paired })
        // let halfResult = _.take(result, result.length/2);
        console.log(result.length)
        let labels = result.map(stat => {
          if (stat.first_pair == stat.second_pair) {
            return stat.first_pair;
          }
          return stat.first_pair + " & " + stat.second_pair
        });

        let values = result.map(stat => stat.days_paired);

        let all_sets = [];
        let sets = result.forEach(stat => {
          if(stat.first_pair != stat.second_pair){
            //People who have paired more should have a bigger circle
             all_sets.push({ sets: [stat.first_pair], size: this.totalNumberOfDaysPaired(result, stat.first_pair)});
             all_sets.push({ sets: [stat.second_pair], size: this.totalNumberOfDaysPaired(result, stat.second_pair)});
            all_sets.push({ sets: [stat.first_pair, stat.second_pair], size: stat.days_paired });
          }
          else {
          // all_sets.push({ sets: [stat.first_pair], size: this.totalNumberOfDaysPaired(result, stat.first_pair)*3});
          }
        });

        let chart = venn.VennDiagram()
          .wrap(false)
          .fontSize("16px")
          .width(1200)
          .height(1000);

        d3.select("#venn").datum(all_sets).call(chart);
        var colours = ['red', 'green', 'blue', "yellow", "yellow", ,"skyblue", "brown", "magenta"];

        // d3.selectAll("#venn .venn-circle path")
        // .style("fill-opacity", 0)
        //   .style("stroke-width", 10)
        //   .style("stroke-opacity", 1);

         d3.selectAll("#venn .venn-circle path")
                .style("fill-opacity", 0.1)
                .style("stroke-width", 10)
                .style("stroke-opacity", .5)
                .style("stroke", function(d,i) { return colours[i%8]; });

            d3.selectAll("#venn .venn-circle text")
                .style("fill", function(d,i) { return colours[i%8]})
                .style("font-size", "24px")
                .style("font-weight", "100");
      });

  }

}
