import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopShellRoutingModule } from './top-shell-routing.module';
import { TopShellComponent } from './top-shell/top-shell.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TopShellComponent],
  imports: [CommonModule, TopShellRoutingModule, MatMenuModule, MatIconModule],
})
export class TopShellModule {}
