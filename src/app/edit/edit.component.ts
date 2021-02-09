import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    text: ['', [Validators.required]],
    isPublic: [false],
  });

  // userのIDをとる
  private user: Observable<User>;
  uid = this.authService.uid;
  msg: string;

  inProgress: boolean;
  titleMaxLength = 50;

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get textControl(): FormControl {
    return this.form.get('text') as FormControl;
  }

  get isPublicControl(): FormControl {
    return this.form.get('isPublic') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private memoService: MemoService,
    private router: Router,
    private snackBer: MatSnackBar
  ) {}

  ngOnInit(): void {}

  submit(): void {
    const formData = this.form.value;
    const sendData: Omit<
      Memo,
      'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'tags'
    > = {
      uid: this.authService.uid,
      thumbnailUrl: null,
      title: formData.title,
      text: formData.text,
      isPublic: formData.isPublic,
      author: this.authService.name
    };
    this.memoService.createMemo(sendData);
    const msg = formData.isPublic
      ? '記事を投稿しました！'
      : '下書きを保存しました！';
    this.snackBer.open(msg, null, {
      duration: 3000,
    });
    this.router.navigateByUrl('/');
  }
}
