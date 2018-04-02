import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Stat } from './stat';
import { MatrixService } from './matrix.service';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import * as d3 from 'd3';
import * as venn from 'venn.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private matrixService: MatrixService) {
  }

  ngAfterViewInit(){
    venn.VennDiagram();
    var sets = [ {sets: ['A'], size: 12},
                 {sets: ['B'], size: 12},
                 {sets: ['A','B'], size: 2}];
 var colours = ['black', 'red', 'blue', 'green'];
    var chart = venn.VennDiagram()
    d3.select("#venn").datum(sets).call(chart);
    d3.selectAll("#venn .venn-circle path")
    .style("fill-opacity", 0.2)
                .style("stroke-width", 10)
                .style("stroke-opacity", .5)
                .style("fill", function(d,i) { return colours[i]; })
                .style("stroke", function(d,i) { return colours[i]; });
  }

}
