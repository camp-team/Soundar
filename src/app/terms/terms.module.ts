import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { SharedModule } from '../shared/shared.module';
import { TermsHeaderComponent } from '../terms-header/terms-header.component';
import { TermsContentsComponent } from '../terms-contents/terms-contents.component';


@NgModule({
  declarations: [TermsComponent, TermsHeaderComponent, TermsContentsComponent],
  imports: [
    CommonModule,
    TermsRoutingModule,
    SharedModule
  ]
})
export class TermsModule { }
