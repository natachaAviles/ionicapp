import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonicModule, RouterLinkWithHref],
  standalone: true,
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
