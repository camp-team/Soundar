import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TransactionLawContentsComponent } from '../transaction-law-contents/transaction-law-contents.component';
import { TransactionLawRoutingModule } from './transaction-law-routing.module';
import { TransactionLawComponent } from './transaction-law.component';

@NgModule({
  declarations: [TransactionLawComponent, TransactionLawContentsComponent],
  imports: [CommonModule, TransactionLawRoutingModule, SharedModule],
})
export class TransactionLawModule {}
