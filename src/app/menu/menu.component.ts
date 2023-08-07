import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
