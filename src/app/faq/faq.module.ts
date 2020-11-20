import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { FaqHeaderComponent } from '../faq-header/faq-header.component';
import { HeaderGuideComponent } from '../header-guide/header-guide.component';


@NgModule({
  declarations: [FaqComponent, FaqHeaderComponent, HeaderGuideComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
