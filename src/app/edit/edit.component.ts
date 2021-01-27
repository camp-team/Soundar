import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    content: ['', [Validators.required]],
    isPublic: [false],
  });

  // userのIDをとる
  private user: Observable<User> = this.authService.user$;

  inProgress: boolean;
  titleMaxLength = 50;

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }
  get contentControl(): FormControl {
    return this.form.get('content') as FormControl;
  }

  get isPublicControl(): FormControl {
    return this.form.get('isPublic') as FormControl;
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  submit(): void {
    // console.log('alert');
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
  // alert(): void {
  //   console.log(this.isPublicControl);
  // }
}
