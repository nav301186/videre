import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Stat } from './stat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data = [
    new Stat("naveen", "naveen2", 2, 11),
    new Stat("naveen1", "naveen2", 2, 31),
    new Stat("naveen3", "naveen2", 2, 31),
    new Stat("naveen3", "naveen2", 2, 31),
    new Stat("naveen3", "naveen2", 2, 31),
    new Stat("naveen3", "naveen2", 2, 31),
  ]

  labels = this.data.map(e => e.getPair());
  percentage = this.data.map(e => e.percent);

  ngAfterViewInit(){

let ctx = document.getElementById("myChart");

  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: this.labels,
        datasets: [{
            label: '# of Votes',
            data: this.percentage,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
  }

}
