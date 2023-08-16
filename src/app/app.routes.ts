import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'item-detail',
    loadComponent: () => import('./item-detail/item-detail.page').then( m => m.ItemDetailPage)
  },
  {
    path: 'detail-managment',
    loadComponent: () => import('./detail-managment/detail-managment.page').then( m => m.DetailManagmentPage)
  },
];
