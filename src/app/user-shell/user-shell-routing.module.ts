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
        data: { noBackArrow: true },
        loadChildren: () =>
          import('../top/top.module').then((m) => m.TopModule),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('../list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'memo',
        loadChildren: () =>
          import('../memo/memo.module').then((m) => m.MemoModule),
      },

      {
        path: 'edit',
        loadChildren: () =>
          import('../edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'magazine',
        loadChildren: () =>
          import('../magazine/magazine.module').then((m) => m.MagazineModule),
      },
      {
        path: 'magazine-viewer',
        loadChildren: () =>
          import('../magazine-viewer/magazine-viewer.module').then(
            (m) => m.MagazineViewerModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('../faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('../terms/terms.module').then((m) => m.TermsModule),
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('../privacy/privacy.module').then((m) => m.PrivacyModule),
      },
      {
        path: 'transaction-law',
        loadChildren: () =>
          import('../transaction-law/transaction-law.module').then(
            (m) => m.TransactionLawModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShellRoutingModule {}
