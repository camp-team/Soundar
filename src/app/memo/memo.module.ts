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
import { ComentsComponent } from '../coments/coments.component';
import { MatInputModule } from '@angular/material/input';
import { ReadNextComponent } from '../read-next-card/read-next-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MemoComponent,
    DetailHeaderComponent,
    ProfileCardComponent,
    MemoContentsComponent,
    CategoryCardComponent,
    ContentsListComponent,
    AuthorComponent,
    ComentsComponent,
    ReadNextComponent,
  ],
  imports: [CommonModule, MemoRoutingModule, MatInputModule, SharedModule],
})
export class MemoModule {}
