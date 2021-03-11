import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagazineViewerComponent } from './magazine-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: MagazineViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazineViewerRoutingModule {}
