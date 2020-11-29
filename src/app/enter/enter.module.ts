import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterRoutingModule } from './enter-routing.module';
import { EnterComponent } from './enter.component';


@NgModule({
  declarations: [EnterComponent],
  imports: [
    CommonModule,
    EnterRoutingModule
  ]
})
export class EnterModule { }
