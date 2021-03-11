import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TermsContentsComponent } from '../terms-contents/terms-contents.component';
import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';

@NgModule({
  declarations: [TermsComponent, TermsContentsComponent],
  imports: [CommonModule, TermsRoutingModule, SharedModule],
})
export class TermsModule {}
