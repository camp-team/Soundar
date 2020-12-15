import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagazineComponent } from './magazine.component';

const routes: Routes = [
  {
    path: '',
    component: MagazineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazineRoutingModule { }
