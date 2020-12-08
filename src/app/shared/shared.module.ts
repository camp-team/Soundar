import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderGuideComponent } from '../header-guide/header-guide.component';
import { MemoCardComponent } from '../memo-card/memo-card.component';

@NgModule({
  declarations: [HeaderGuideComponent, MemoCardComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderGuideComponent, MemoCardComponent],
})
export class SharedModule {}
