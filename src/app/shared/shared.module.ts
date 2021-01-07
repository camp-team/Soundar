import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderGuideComponent } from '../header-guide/header-guide.component';
import { MemoCardComponent } from '../memo-card/memo-card.component';
import { NextCardComponent } from '../next-card/next-card.component';
import { NextPageButtonComponent } from '../next-page-button/next-page-button.component';
import { AuthorComponent } from '../author/author.component';

@NgModule({
  declarations: [
    AuthorComponent,
    HeaderGuideComponent,
    MemoCardComponent,
    NextCardComponent,
    NextPageButtonComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    AuthorComponent,
    HeaderGuideComponent,
    MemoCardComponent,
    NextCardComponent,
    NextPageButtonComponent,
  ],
})
export class SharedModule {}
