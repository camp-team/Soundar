import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';
import { DetailHeaderComponent } from '../detail-header/detail-header.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { MemoContentsComponent } from '../memo-contents/memo-contents.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ContentsListComponent } from '../contents-list/contents-list.component';
import { AuthorComponent } from '../author/author.component';


@NgModule({
  declarations: [MemoComponent, DetailHeaderComponent, ProfileCardComponent, MemoContentsComponent, CategoryCardComponent, ContentsListComponent, AuthorComponent],
  imports: [
    CommonModule,
    MemoRoutingModule
  ]
})
export class MemoModule { }
