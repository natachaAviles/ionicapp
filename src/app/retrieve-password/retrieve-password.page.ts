import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.page.html',
  styleUrls: ['./retrieve-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RetrievePasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
