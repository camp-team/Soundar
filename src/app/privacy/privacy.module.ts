import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { PrivacyHeaderComponent } from '../privacy-header/privacy-header.component';
import { SharedModule } from '../shared/shared.module';
import { PrivacyContentsComponent } from '../privacy-contents/privacy-contents.component';


@NgModule({
  declarations: [PrivacyComponent, PrivacyHeaderComponent, PrivacyContentsComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    SharedModule
  ]
})
export class PrivacyModule { }
