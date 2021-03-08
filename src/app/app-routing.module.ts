import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'enter',
    loadChildren: () =>
      import('./enter/enter.module').then((m) => m.EnterModule),
  },

  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled', // 画面表示時のアンカーリンクを有効にする
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
