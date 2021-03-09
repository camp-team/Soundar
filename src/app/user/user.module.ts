import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutCardComponent } from '../about-card/about-card.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, UserCardComponent, AboutCardComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
