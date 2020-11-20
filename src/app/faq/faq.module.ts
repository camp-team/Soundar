import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { FaqHeaderComponent } from '../faq-header/faq-header.component';


@NgModule({
  declarations: [FaqComponent, FaqHeaderComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
