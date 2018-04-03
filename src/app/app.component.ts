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
        let uniquePairs = result.map(stat => stat.first_pair);
        let halfResult = _.take(result, result.length/2);
        console.log(halfResult.length)
        console.log(result.length)
        result = halfResult;
        let labels = halfResult.map(stat => {
          if (stat.first_pair == stat.second_pair) {
            return stat.first_pair;
          }
          return stat.first_pair + " & " + stat.second_pair
        });

        let values = result.map(stat => stat.days_paired);

        venn.VennDiagram();

        let all_sets = [];
        let all_names = [];
        let sets = halfResult.forEach(stat => {
          all_names.push(stat.first_pair);
          all_names.push(stat.second_pair);

          if(stat.first_pair != stat.second_pair){
            all_sets.push({ sets: [stat.first_pair], size: this.totalNumberOfDaysPaired(result, stat.first_pair), weight: 1e-10});
            all_sets.push({ sets: [stat.second_pair], size: this.totalNumberOfDaysPaired(result, stat.second_pair) , weight: 1e-10});
          all_sets.push({ sets: [stat.first_pair, stat.second_pair], size: stat.days_paired });
          }
          else {
          all_sets.push({ sets: [stat.first_pair], size: this.totalNumberOfDaysPaired(result, stat.first_pair)*3});
          }
        });

        let unique_names = all_names.filter((el, i, a) => i === a.indexOf(el))
        var chart = venn.VennDiagram()
          .wrap(false)
          .fontSize("16px")
          .width(1200)
          .height(1000);

        d3.select("#venn").datum(all_sets).call(chart);

        d3.selectAll("#venn .venn-circle path")
        .style("fill-opacity", 0.2)
          .style("stroke-width", 10)
          .style("stroke-opacity", .5);
      });

  }

}
