import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref],
})

export class ListItemComponent {
  @Input() isWarning?: boolean;
  @Input() isSuccess?: boolean;
  @Input() isError?: boolean;
  @Input() isFavorite?: boolean;

  @Input() status?: string;
  @Input() score?: string;
  @Input() name?: string;
  @Input() type?: string;
  @Input() date?: string;
  @Input() comment?: string;
}
