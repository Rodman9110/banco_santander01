import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'aria-personal', loadChildren: () => import('./aria-personal/aria-personal.module').then(m => m.AriaPersonalModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'buzon', loadChildren: () => import('./buzon/buzon.module').then(m => m.BuzonModule) },
  { path: 'sofia', loadChildren: () => import('./sofia/sofia.module').then(m => m.SofiaModule) },
  { path: 'bank_operations', loadChildren: () => import('./bank-operations/bank-operations.module').then(m => m.BankOperationsModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
