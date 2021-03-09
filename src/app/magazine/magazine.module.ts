import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './magazine.component';
import { MagazineDetailHeaderComponent } from '../magazine-detail-header/magazine-detail-header.component';
import { MagazineContentsComponent } from '../magazine-contents/magazine-contents.component';
import { MatIconModule } from '@angular/material/icon';
import { MagazineChaptersComponent } from '../magazine-chapters/magazine-chapters.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MagazineComponent,
    MagazineChaptersComponent,
    MagazineContentsComponent,
    MagazineDetailHeaderComponent,
  ],
  imports: [CommonModule, MagazineRoutingModule, MatIconModule, SharedModule],
})
export class MagazineModule {}
