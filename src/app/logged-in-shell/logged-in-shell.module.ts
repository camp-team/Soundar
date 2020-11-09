import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInShellRoutingModule } from './logged-in-shell-routing.module';
import { LoggedInShellComponent } from './logged-in-shell/logged-in-shell.component';


@NgModule({
  declarations: [LoggedInShellComponent],
  imports: [
    CommonModule,
    LoggedInShellRoutingModule
  ]
})
export class LoggedInShellModule { }
