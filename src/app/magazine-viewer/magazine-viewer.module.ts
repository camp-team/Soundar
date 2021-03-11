import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazineViewerRoutingModule } from './magazine-viewer-routing.module';
import { MagazineViewerComponent } from './magazine-viewer.component';

@NgModule({
  declarations: [MagazineViewerComponent],
  imports: [CommonModule, MagazineViewerRoutingModule],
})
export class MagazineViewerModule {}
