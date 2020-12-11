import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { AboutCardComponent } from '../about-card/about-card.component';


@NgModule({
  declarations: [UserComponent, UserHeaderComponent, UserCardComponent, AboutCardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
