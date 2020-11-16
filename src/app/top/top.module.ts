import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { HeroComponent } from '../hero/hero.component';
import { RecentMemoComponent } from '../recent-memo/recent-memo.component';
import { MemoCardComponent } from '../memo-card/memo-card.component';
import { RecentMagazineComponent } from '../recent-magazine/recent-magazine.component';
import { MagazineCardComponent } from '../magazine-card/magazine-card.component';

@NgModule({
  declarations: [
    TopComponent,
    HeroComponent,
    RecentMemoComponent,
    MemoCardComponent,
    RecentMagazineComponent,
    MagazineCardComponent,
  ],
  imports: [CommonModule, TopRoutingModule],
})
export class TopModule {}
