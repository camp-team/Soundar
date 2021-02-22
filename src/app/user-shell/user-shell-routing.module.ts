import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserShellComponent } from './user-shell/user-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UserShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../memo/memo.module').then((m) => m.MemoModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../top/top.module').then((m) => m.TopModule),
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('../edit/edit.module').then((m) => m.EditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShellRoutingModule {}
