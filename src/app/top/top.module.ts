import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { HeroComponent } from '../hero/hero.component';


@NgModule({
  declarations: [TopComponent, HeroComponent],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
