import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotLoggedInShellRoutingModule } from './not-logged-in-shell-routing.module';
import { NotLoggedInShellComponent } from './not-logged-in-shell/not-logged-in-shell.component';


@NgModule({
  declarations: [NotLoggedInShellComponent],
  imports: [
    CommonModule,
    NotLoggedInShellRoutingModule
  ]
})
export class NotLoggedInShellModule { }
