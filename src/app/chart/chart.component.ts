import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, Chart],
})
export class ChartComponent  implements OnInit {
  constructor() { }

  myChart = new Chart(document.getElementById('myChart'));

  ngOnInit() {
    // Create a new Chart object
    this.myChart = new Chart(document.getElementById('myChart'));
    // Add data to the chart
    this.myChart.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales',
          data: [10, 20, 30, 40, 50, 60],
        },
      ],
    };
    // Configure the chart
    this.myChart.options = {
      title: {
        text: 'Monthly Sales',
      },
      xAxis: {
        title: {
          text: 'Month',
        },
      },
      yAxis: {
        title: {
          text: 'Sales',
        },
      },
    };
  }

}
