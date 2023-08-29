import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

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
  'ABIERTO': {
    'default': 'rgb(0, 112, 192)',
    'hover': 'rgb(25, 137, 217)'
  }
}
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref],
})


export class ListItemComponent {
  @Input() isWarning?: boolean;
  @Input() isSuccess?: boolean;
  @Input() isError?: boolean;
  @Input() isFavorite?: boolean;

  @Input() status?: string;
  @Input() score?: string;
  @Input() name?: string;
  @Input() type?: string;
  @Input() date?: string;
  @Input() comment?: string;

  stateColors: { [key: string]: { default: string; hover: string } } = stateColors; 
}
