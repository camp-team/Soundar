import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ComentsComponent } from '../coments/coments.component';
import { ContentsListComponent } from '../contents-list/contents-list.component';
import { DetailHeaderComponent } from '../detail-header/detail-header.component';
import { MemoContentsComponent } from '../memo-contents/memo-contents.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { ReadNextComponent } from '../read-next/read-next.component';
import { SharedModule } from '../shared/shared.module';
import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';


@NgModule({
  declarations: [
    MemoComponent,
    CategoryCardComponent,
    ComentsComponent,
    ContentsListComponent,
    DetailHeaderComponent,
    MemoContentsComponent,
    ProfileCardComponent,
    ReadNextComponent,
  ],
  imports: [CommonModule, MemoRoutingModule, MatInputModule, SharedModule],
})
export class MemoModule {}
