import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutHeaderComponent } from '../about-header/about-header.component';
import { AboutContentsComponent } from '../about-contents/about-contents.component';


@NgModule({
  declarations: [AboutComponent, AboutHeaderComponent, AboutContentsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
