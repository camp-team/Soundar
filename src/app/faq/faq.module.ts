import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { FaqHeaderComponent } from '../faq-header/faq-header.component';
import { FaqContentsComponent } from '../faq-contents/faq-contents.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FaqComponent, FaqContentsComponent, FaqHeaderComponent],
  imports: [CommonModule, FaqRoutingModule, SharedModule],
})
export class FaqModule {}
