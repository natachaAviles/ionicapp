import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [IonicModule, FilterModalComponent],
  standalone: true,
})
export class SearchbarComponent  implements OnInit {
  constructor() {}

  ngOnInit() {}

}
