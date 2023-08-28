import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class NotificationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
