import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionLawComponent } from './transaction-law.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionLawComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionLawRoutingModule {}
