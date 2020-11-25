import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderGuideComponent } from '../header-guide/header-guide.component';


@NgModule({
  declarations: [HeaderGuideComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HeaderGuideComponent]
})
export class SharedModule { }
