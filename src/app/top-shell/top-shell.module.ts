import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopShellRoutingModule } from './top-shell-routing.module';
import { TopShellComponent } from './top-shell/top-shell.component';


@NgModule({
  declarations: [TopShellComponent],
  imports: [
    CommonModule,
    TopShellRoutingModule
  ]
})
export class TopShellModule { }
