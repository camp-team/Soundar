import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    QuillModule,
    ReactiveFormsModule,
  ]
})
export class EditModule { }
