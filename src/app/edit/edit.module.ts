import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { CropperModule } from '@deer-inc/ngx-croppie';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    QuillModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule,
    CropperModule,
  ],
})
export class EditModule {}
