import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    loadChildren: () => import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'enter',
    loadChildren: () =>
      import('./enter/enter.module').then((m) => m.EnterModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'magazine',
    loadChildren: () =>
      import('./magazine/magazine.module').then((m) => m.MagazineModule),
  },
  {
    path: 'magazine-viewer',
    loadChildren: () =>
      import('./magazine-viewer/magazine-viewer.module').then(
        (m) => m.MagazineViewerModule
      ),
  },
  {
    path: 'memo',
    loadChildren: () => import('./memo/memo.module').then((m) => m.MemoModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./privacy/privacy.module').then((m) => m.PrivacyModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'transaction-law',
    loadChildren: () =>
      import('./transaction-law/transaction-law.module').then(
        (m) => m.TransactionLawModule
      ),
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
