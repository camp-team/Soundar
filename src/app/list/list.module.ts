import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, ListHeaderComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule],
})
export class ListModule {}
