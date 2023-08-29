import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonModal, MenuController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [IonicModule, FilterModalComponent],
  standalone: true,
})
export class SearchbarComponent  implements OnInit {
  constructor(private menuCtrl: MenuController) {}
  ngOnInit(): void {}

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

}
