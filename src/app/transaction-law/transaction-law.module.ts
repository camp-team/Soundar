import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionLawRoutingModule } from './transaction-law-routing.module';
import { TransactionLawComponent } from './transaction-law.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionLawHeaderComponent } from '../transaction-law-header/transaction-law-header.component';
import { TransactionLawContentsComponent } from '../transaction-law-contents/transaction-law-contents.component';


@NgModule({
  declarations: [TransactionLawComponent, TransactionLawHeaderComponent, TransactionLawContentsComponent],
  imports: [
    CommonModule,
    TransactionLawRoutingModule,
    SharedModule
  ]
})
export class TransactionLawModule { }
