import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Memo } from '../interfaces/memo';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    content: [''],
    isPublic: [false]
  });

  private user: User;
  inProgress: boolean;
  titleMaxLength = 50;

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get isPublicControl(): FormControl {
    return this.form.get('isPublic') as FormControl;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {}

  submit(): void {
    this.inProgress = true;
    const formData = this.form.value;
    const sendData: Omit<
      Memo,
      'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'tags'
    > = {
      uid: this.user.uid,
      thumbnailUrl: null,
      title: formData.title,
      text: formData.editorContent,
      isPublic: formData.isPublic,
    };
  }
}
