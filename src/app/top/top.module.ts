import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { TopHeroComponent } from '../top-hero/top-hero.component';


@NgModule({
  declarations: [TopComponent, TopHeroComponent],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
