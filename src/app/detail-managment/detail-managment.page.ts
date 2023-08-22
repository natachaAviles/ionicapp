import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-detail-managment',
  templateUrl: './detail-managment.page.html',
  styleUrls: ['./detail-managment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class DetailManagmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
