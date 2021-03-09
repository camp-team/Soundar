import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from '../author/author.component';
import { HeaderGuideComponent } from '../header-guide/header-guide.component';
import { MemoCardComponent } from '../memo-card/memo-card.component';
import { NextCardComponent } from '../next-card/next-card.component';
import { NextPageButtonComponent } from '../next-page-button/next-page-button.component';
import { RemoveHtmlTagsPipe } from '../remove-html-tags.pipe';

@NgModule({
  declarations: [
    AuthorComponent,
    HeaderGuideComponent,
    MemoCardComponent,
    NextCardComponent,
    NextPageButtonComponent,
    RemoveHtmlTagsPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AuthorComponent,
    HeaderGuideComponent,
    MemoCardComponent,
    NextCardComponent,
    NextPageButtonComponent,
    RemoveHtmlTagsPipe,
  ],
})
export class SharedModule {}
