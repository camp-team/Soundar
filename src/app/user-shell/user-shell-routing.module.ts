import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserShellComponent } from './user-shell/user-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UserShellComponent,
    children: [
      {
        path: 'edit',
        loadChildren: () => import('../edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: '',
        loadChildren: () => import('../top/top.module').then((m) => m.TopModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserShellRoutingModule { }
