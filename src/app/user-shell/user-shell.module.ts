import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [UserShellComponent],
  imports: [CommonModule, UserShellRoutingModule, MatMenuModule, MatIconModule],
})
export class UserShellModule {}
