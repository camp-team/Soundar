import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaqContentsComponent } from '../faq-contents/faq-contents.component';
import { SharedModule } from '../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [FaqComponent, FaqContentsComponent],
  imports: [CommonModule, FaqRoutingModule, SharedModule],
})
export class FaqModule {}
