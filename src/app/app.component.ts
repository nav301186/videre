import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Stat } from './stat';
import { MatrixService } from './matrix.service';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { venn } from 'neustar-venn';
import { d3 } from 'neustar-venn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private matrixService: MatrixService) {
  }

  ngAfterViewInit1(){
    this.matrixService.getPairingStats()
      .subscribe(result => {

        let labels = result.map(stat => {
          if(stat.first_pair == stat.second_pair)
          {
            return stat.first_pair;
          }
          return stat.first_pair + " & " +  stat.second_pair
        });
        let values = result.map(stat => stat.days_paired);
        console.log(labels)
        console.log(values)

    let ctx = document.getElementById("myChart");
        Chart.defaults.global.defaultColor = "green";
    let myChart = new Chart(ctx, {
      type: 'bar',
    data: {
      labels: labels,
        datasets: [{
            label: '# of days paired',
            data: values,
            backgroundColor: '#ADFF2F',
            borderColor: [
                // 'rgba(255,99,132,1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                  beginAtZero:true,
                }
            }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
    }
});
    });
  }

  ngAfterViewInit(){
    var sets = [ {sets: ['A'], size: 12},
             {sets: ['B'], size: 12},
             {sets: ['A','B'], size: 2}];

var chart = venn.VennDiagram()
d3.select("#venn").datum(sets).call(chart);
  }

}
