import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopShellComponent } from './top-shell/top-shell.component';

const routes: Routes = [
  {
    path: '',
    component: TopShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../top/top.module').then((m) => m.TopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopShellRoutingModule {}
