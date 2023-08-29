import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Chart } from 'chart.js/auto'
import { SearchbarComponent } from '../searchbar/searchbar.component';

const scoreColors = {
  'DETRACTOR': 'rgb(230, 122, 119)',
  'PASIVO': 'rgb(255, 223, 124)',
  'PROMOTOR': 'rgb(121, 209, 207)'
}

@Component({
  selector: 'app-experience-indicators',
  templateUrl: './experience-indicators.page.html',
  styleUrls: ['./experience-indicators.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SearchbarComponent]
})

export class ExperienceIndicatorsPage {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  @ViewChild('lineCanvas') lineCanvas: ElementRef | undefined;

  barChart: any;
  lineChart: any;

  ngAfterViewInit() {
    this.barChartMethod();
    this.lineMethod();
  }

  constructor() { }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      },
      data: {
          labels: ["Junio"],
          datasets: [{
            data: [15],
            label: 'Detractor',
            backgroundColor: scoreColors['DETRACTOR'],
          },{
              data: [15],
              label: 'Pasivo',
              backgroundColor: scoreColors['PASIVO'],
          },{
            data: [10],
            label: 'Promotor',
            backgroundColor:  scoreColors['PROMOTOR'],
        }]
      },
    })
  }

  lineMethod() {
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          }
        }
      },
      data: {
        labels: ['punto 1', 'punto 2', 'punto 3', 'punto 4', 'punto 5', 'punto 6', 'punto 7', 'punto 8',
         'punto 9', 'punto 10', 'punto 11', 'punto 12', 'punto 13', 'punto 14', 'punto 15', 'punto 16',
         'punto 17', 'punto 18', 'punto 19', 'punto 20', 'punto 21', 'punto 22', 'punto 23', 'punto 24',
         'punto 25', 'punto 26', 'punto 27', 'punto 28', 'punto 29', 'punto 30', 'punto 31', 'punto 32',
         'punto 33', 'punto 34', 'punto 35', 'punto 36', 'punto 37', 'punto 38', 'punto 39', 'punto 40',
         'punto 41', 'punto 42', 'punto 43', 'punto 44', 'punto 45'],
        datasets: [{
          tension: 0.4,
          label: 'Puntos de contacto',
          data: [65, 30, 40, 50, 90, 59, 80, 81, 56, 55, 40, 65, 70, 10, 30, 40, 23, 75, 60, 45, 20, 85, 70, 30, 50,
            45, 80, 25, 70, 60, 35, 55, 90, 20, 50, 65, 30, 40, 50, 90, 59, 80, 81, 56, 55],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }],
      }
    })
  }
}
