import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { HeroComponent } from '../hero/hero.component';
import { RecentMemoComponent } from '../recent-memo/recent-memo.component';
import { MemoCardComponent } from '../memo-card/memo-card.component';
import { RecentMagazineComponent } from '../recent-magazine/recent-magazine.component';
import { MagazineCardComponent } from '../magazine-card/magazine-card.component';
import { PublishGuideComponent } from '../publish-guide/publish-guide.component';
import { RecentMusicComponent } from '../recent-music/recent-music.component';
import { MusicCardComponent } from '../music-card/music-card.component';
import { RecentMovieComponent } from '../recent-movie/recent-movie.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@NgModule({
  declarations: [
    TopComponent,
    HeroComponent,
    RecentMemoComponent,
    MemoCardComponent,
    RecentMagazineComponent,
    MagazineCardComponent,
    PublishGuideComponent,
    RecentMusicComponent,
    MusicCardComponent,
    RecentMovieComponent,
    MovieCardComponent,
  ],
  imports: [CommonModule, TopRoutingModule],
})
export class TopModule {}
