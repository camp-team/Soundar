import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { TopHeroComponent } from '../top-hero/top-hero.component';
import { RecentMemoComponent } from '../recent-memo/recent-memo.component';


@NgModule({
  declarations: [TopComponent, TopHeroComponent, RecentMemoComponent],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
