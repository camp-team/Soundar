import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutContentsComponent } from '../about-contents/about-contents.component';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, AboutContentsComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
