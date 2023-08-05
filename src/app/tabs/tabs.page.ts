import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SearchbarComponent } from '../searchbar/searchbar.component';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, SearchbarComponent],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}
