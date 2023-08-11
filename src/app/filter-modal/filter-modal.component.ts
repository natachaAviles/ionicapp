import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController, IonModal  } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  imports: [IonicModule],
  standalone: true,
})

export class FilterModalComponent  implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;
  name?: string;
  message = '';

  constructor(private modalController: ModalController) { }

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

  ngOnInit() {}

}
