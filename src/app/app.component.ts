import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MenuComponent, FilterModalComponent],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);
  constructor() {}
}
