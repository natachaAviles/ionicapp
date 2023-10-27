import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [IonicModule, FilterModalComponent, CommonModule],
  standalone: true,
})
export class SearchbarComponent  implements OnInit {
  constructor(private menuCtrl: MenuController) {}
  ngOnInit(): void {}
  @Input() advancedFilterActivated?: boolean | true;
  @Input() simpleFilterActivated?: boolean;


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
