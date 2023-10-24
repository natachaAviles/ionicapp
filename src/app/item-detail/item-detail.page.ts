import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnterActionInfoComponent } from '../enter-action-info/enter-action-info.component';
import { TabsPage } from '../tabs/tabs.page';
import { RouterLinkWithHref } from '@angular/router';

import { MultiSelectModule } from 'primeng/multiselect';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, EnterActionInfoComponent, RouterLinkWithHref, MultiSelectModule]
})
export class ItemDetailPage implements OnInit {
  selectedSegment: string = 'feedback';
  component = TabsPage;
  selectedCities!: City[];
  cities!: City[];

  public actionSheetButtons = [
    {
      text: 'Móvil',
      icon: 'phone-portrait-outline',
      data: {
        action: 'share',
      },
      handler: () => {
        // Add your code here to handle the 'Telefono 2' action, avoid close action on call
        return false 
      }
    },
    {
      text: 'Teléfono 1',
      icon: 'call-outline',
      data: {
        action: 'share',
      },
      handler: () => {
        // Add your code here to handle the 'Telefono 2' action, avoid close action on call
        return false 
      }
    },
    {
      text: 'Teléfono 2',
      icon: 'call-outline',
      data: {
        action: 'share',
      },
      handler: () => {
        // Add your code here to handle the 'Telefono 2' action, avoid close action on call
        return false 
      }
    },
    {
      text: 'Whatsapp',
      icon: 'logo-whatsapp',
      data: {
        action: 'share',
      },
      handler: () => {
        // Add your code here to handle the 'Telefono 2' action, avoid close action on call
        return false 
      }
    },
    {
      text: 'Correo',
      icon: 'mail-outline',
      data: {
        action: 'share',
      },
      handler: () => {
        // Add your code here to handle the 'Telefono 2' action, avoid close action on call
        return false 
      }
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }
  ngOnInit() {}

}
