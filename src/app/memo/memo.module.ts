import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';
import { DetailHeaderComponent } from '../detail-header/detail-header.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';


@NgModule({
  declarations: [MemoComponent, DetailHeaderComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    MemoRoutingModule
  ]
})
export class MemoModule { }
