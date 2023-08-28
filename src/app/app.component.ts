import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MenuComponent, NotificationsComponent, FilterModalComponent],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);
  constructor() {}
}
