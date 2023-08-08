import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,  ListItemComponent],
})
export class Tab1Page {
  items = [
    {
      isWarning: true,
      status: 'Abierto',
      score: '5',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isSuccess: true,
      status: 'En curso',
      score: '7',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isError: true,
      status: 'Resuelto',
      score: '2',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isSuccess: true,
      status: 'En curso',
      score: '6',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isWarning: true,
      status: 'Sin gestión',
      score: '5',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isSuccess: true,
      status: 'Sin conta...',
      score: '6',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isWarning: true,
      status: 'Abierto',
      score: '4',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isSuccess: true,
      status: 'En curso',
      score: '8',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isError: true,
      status: 'Resuelto',
      score: '1',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    },
    {
      isWarning: true,
      status: 'Sin gestión',
      score: '3',
      name: 'Elizabeth Park...',
      type: 'Pasivo',
      date: '23/08/2023',
      comment: 'Comentario placeholder'
    }
  ];  
}
