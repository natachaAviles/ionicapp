import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NodeService } from './nodeservice';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, MenuComponent, NotificationsComponent, FilterModalComponent, HttpClientModule],
  providers: [NodeService]
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);
  constructor() {}
}
