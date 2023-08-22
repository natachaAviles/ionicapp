import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnterActionInfoComponent } from '../enter-action-info/enter-action-info.component';
import { TabsPage } from '../tabs/tabs.page';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, EnterActionInfoComponent, RouterLinkWithHref]
})
export class ItemDetailPage implements OnInit {
  selectedSegment: string = 'feedback';
  component = TabsPage;

  constructor() { }
  ngOnInit() {}

}
