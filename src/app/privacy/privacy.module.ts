import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { PrivacyHeaderComponent } from '../privacy-header/privacy-header.component';


@NgModule({
  declarations: [PrivacyComponent, PrivacyHeaderComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyModule { }
