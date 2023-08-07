import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})

export class ListItemComponent  implements OnInit {
  @Input() isSuccess = false;
  @Input() isWarning = false;
  @Input() isError = false;

  constructor() { }

  ngOnInit() {}

}
