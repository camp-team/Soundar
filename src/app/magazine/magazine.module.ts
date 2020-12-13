import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './magazine.component';
import { MagazineDetailHeaderComponent } from '../magazine-detail-header/magazine-detail-header.component';


@NgModule({
  declarations: [MagazineComponent, MagazineDetailHeaderComponent],
  imports: [
    CommonModule,
    MagazineRoutingModule
  ]
})
export class MagazineModule { }
