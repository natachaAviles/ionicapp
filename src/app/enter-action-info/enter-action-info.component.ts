import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-enter-action-info',
  templateUrl: './enter-action-info.component.html',
  styleUrls: ['./enter-action-info.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EnterActionInfoComponent  implements OnInit {
  @Input()
  selectedSegment!: string | 'feedback';

  constructor(private modalController: ModalController) {}

  cancel() {
    this.modalController.dismiss();
  }

  confirm() {
    this.modalController.dismiss({});
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(`Hello, ${ev.detail.data}!`)
    }
  }


  ngOnInit() {}

}
