import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-enter-action-info',
  templateUrl: './enter-action-info.component.html',
  styleUrls: ['./enter-action-info.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EnterActionInfoComponent  implements OnInit {
  @Input()
  selectedSegment!: string | 'feedback';

  constructor() { }

  ngOnInit() {}

}
