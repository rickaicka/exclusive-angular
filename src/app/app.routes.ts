import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
  }
];
