import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';

import { Chart } from 'chart.js/auto'
import { SearchbarComponent } from '../searchbar/searchbar.component';

const scoreColors = {
  'DETRACTOR': 'rgb(230, 122, 119)',
  'PASIVO': 'rgb(255, 223, 124)',
  'PROMOTOR': 'rgb(121, 209, 207)'
}

const footer = (tooltipItems: any[]) => {
  let sum = 0;

  tooltipItems.forEach(function(tooltipItem) {
    sum += tooltipItem.parsed.y;
  });

  const totalText = `N Total: ${sum}`;
  const localText = 'NPS: ' + tooltipItems[0].parsed.y;

  return `${totalText}\n${localText}\n`;
};

@Component({
  selector: 'app-experience-indicators',
  templateUrl: './experience-indicators.page.html',
  styleUrls: ['./experience-indicators.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SearchbarComponent]
})

export class ExperienceIndicatorsPage {
  constructor(private menuCtrl: MenuController) {}
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  @ViewChild('lineCanvas') lineCanvas: ElementRef | undefined;

  barChart: any;
  lineChart: any;
  buttonText: string = 'Seleccionar nivel';
  barChartButtonText: string = 'Mensual'


  public pickerColumns = [
    {
      name: 'niveles',
      options: [
        {
          text: 'Nivel 1',
          value: 'Nivel 1',
        },
        {
          text: 'Nivel 2',
          value: 'Nivel 2',
        },
        {
          text: 'Nivel 3',
          value: 'Nivel 3',
        },
      ],
    },
  ];

  public pickerColumns2 = [
    {
      name: 'niveles',
      options: [
        {
          text: 'Mensual',
          value: 'Mensual',
        },
        {
          text: 'Semanal',
          value: 'Semanal',
        },
        {
          text: 'Semanal +',
          value: 'Semanal +',
        },
      ],
    },
  ];

  public pickerButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Confirmar',
      handler: (value: { niveles: { value: string; }; }) => {
        this.buttonText = value.niveles.value;
      },
    },
  ];

  ngAfterViewInit() {
    this.barChartMethod();
    this.lineMethod();
  }

  openFirstMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'first-menu');
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'second-menu');
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    // Open the menu by side
    this.menuCtrl.open('end');
  }


  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            display: "auto",
          },
        },
        indexAxis: 'y',
      },
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            label: 'NPS',
            yAxisID: "bar-stack",
            backgroundColor: "black",
            type: 'line',
            fill: false,
            tension: 0.4,
            borderWidth: 0.8,
            data: [80, 130, 100, 140, 138, 125,110, 145],
          },
          {
            label: "Detractor",
            yAxisID: 'bar-stack',
            backgroundColor: "#d7807a",          
            borderWidth: 1,
            stack: 'bef',
            data: [30, 50, 60, 70,]
          },
          {
            label: "Pasivo",
            yAxisID: 'bar-stack',
            backgroundColor: "#fbe08b",
            borderWidth: 1,
            stack: 'bef',
            data: [30, 50, 60, 70]
          },
          {
            label: "Promotor",
            yAxisID: 'bar-stack',
            backgroundColor: "#8ececd",            
            borderWidth: 1,
            stack: 'bef',
            data: [40, 70, 30, 60]
          },
        ]
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
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: function() {
                return '';
              },
              label: function(context) {
                return 'Punto de contacto:' + ' ' + context.label
              },
              footer: footer,
            }
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
          label: 'Punto de contactos',
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
