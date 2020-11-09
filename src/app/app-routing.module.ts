import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user-shell/user-shell.module').then(
      (m) => m.UserShellModule
    )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
