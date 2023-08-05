import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class SearchbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
