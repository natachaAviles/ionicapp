import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController, IonModal  } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { NodeService } from '../nodeservice';
import { MessageService } from 'primeng/api';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  imports: [IonicModule, TreeSelectModule, FormsModule],
  standalone: true,
  providers: [MessageService]
})

export class FilterModalComponent  implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;
  name?: string;
  message = '';

  nodes!: any[];
  selectedNodes: any;

  constructor(private modalController: ModalController, public nodeService: NodeService) { }

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
  }
}
