import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import {Chart} from 'chart.js/auto'

const stateColors = {
  'CERRADO SIN GESTION': {
    'default': 'rgb(230, 122, 119)',
    'hover': 'rgb(255, 147, 144)'
  },
  'CERRADO SIN CONTACTO': {
    'default': 'rgb(128, 128, 128)',
    'hover': 'rgb(153, 153, 153)'
  },
  'CERRADO': {
    'default': 'rgb(121, 209, 207)',
    'hover': 'rgb(146, 234, 232)'
  },
  'EN CURSO': {
    'default': 'rgb(95, 222, 239)',
    'hover': 'rgb(120, 247, 255)'
  },
  'ABIERTA': {
    'default': 'rgb(0, 112, 192)',
    'hover': 'rgb(25, 137, 217)'
  }
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab3Page {
 @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef | undefined;

  doughnutChart: any;

  constructor() {}

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {      
    this.doughnutChart = new Chart(this.doughnutCanvas?.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Abierto', 'En curso', 'Cerrado', 'Cerrado sin contacto', 'Cerrado sin gestión'],
        datasets: [
          {
            data: [50, 29, 15, 10, 7],
            backgroundColor: [
              stateColors['ABIERTA']['default'],
              stateColors['EN CURSO']['default'],
              stateColors['CERRADO']['default'],
              stateColors['CERRADO SIN CONTACTO']['default'],
              stateColors['CERRADO SIN GESTION']['default']
            ]
          },
        ],
      },
    });
  }
}
