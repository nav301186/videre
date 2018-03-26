import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { Stat } from './stat';
import { MatrixService } from './matrix.service';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  data : Observable<Stat[]>;
  labels: string[];
  values: number[];

  constructor(private matrixService: MatrixService) {
    this.matrixService.getPairingStats()
      .subscribe(result => {
   this.labels = result.map(stat => stat.first_pair + stat.second_pair);
   this.values = result.map(stat => stat.percent);
    });
  }

  ngAfterViewInit(){
    this.matrixService.getPairingStats()
      .subscribe(result => {
   this.labels = result.map(stat => stat.first_pair + " & " +  stat.second_pair);
   this.values = result.map(stat => stat.percent);

    let ctx = document.getElementById("myChart");
    console.log(this.values)

    let myChart = new Chart(ctx, {
      type: 'bar',
    data: {
      labels: this.labels,
        datasets: [{
            label: '# of Votes',
            data: this.values,
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
    });
  }

}
