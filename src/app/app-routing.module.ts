import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./user-shell/user-shell.module').then(
      (m) => m.UserShellModule
    ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-shell/admin-shell.module').then(
        (m) => m.AdminShellModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
