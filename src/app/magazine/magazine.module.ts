import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './magazine.component';
import { MagazineDetailHeaderComponent } from '../magazine-detail-header/magazine-detail-header.component';
import { MagazineContentsComponent } from '../magazine-contents/magazine-contents.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MagazineComponent, MagazineDetailHeaderComponent, MagazineContentsComponent],
  imports: [
    CommonModule,
    MagazineRoutingModule,
    MatIconModule
  ]
})
export class MagazineModule { }
