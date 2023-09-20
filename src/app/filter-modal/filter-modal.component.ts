import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController, IonModal  } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { NodeService } from '../nodeservice';
import { MessageService } from 'primeng/api';

import { TreeSelectModule } from 'primeng/treeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  imports: [IonicModule, TreeSelectModule, FormsModule, CalendarModule, MultiSelectModule, InputTextModule],
  standalone: true,
  providers: [MessageService]
})

export class FilterModalComponent  implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;
  name?: string;
  message = '';

  rangeDates: Date[] = [new Date('2023-09-01'), new Date('2023-09-10')];
  nodes!: any[];
  segments!: any;
  selectedNodes: any;
  buttonText: string = 'Seleccionar Escala'

  cities!: City[];

  selectedCities!: City[];

  constructor(private modalController: ModalController, public nodeService: NodeService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
   }

  cancel() {
    this.modalController.dismiss();
  }

  confirm() {
    this.modalController.dismiss({ name: this.name });
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.nodes = files);
    this.nodeService.getSegments().then(segments => this.segments = segments);
  }

  public pickerColumns = [
    {
      name: 'niveles',
      options: [
        {
          text: 'NPS',
          value: 'NPS',
        },
        {
          text: 'CES',
          value: 'CES',
        },
        {
          text: 'CSAT',
          value: 'CSAT',
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
}
