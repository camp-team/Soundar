import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivacyContentsComponent } from '../privacy-contents/privacy-contents.component';
import { SharedModule } from '../shared/shared.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  declarations: [PrivacyComponent, PrivacyContentsComponent],
  imports: [CommonModule, PrivacyRoutingModule, SharedModule],
})
export class PrivacyModule {}
