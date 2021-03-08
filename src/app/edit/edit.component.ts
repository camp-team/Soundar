import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { MemoService } from '../services/memo.service';
import { CropperOptions } from '@deer-inc/ngx-croppie';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form = this.fb.group({
    // formというform groupの中に
    title: ['', [Validators.required, Validators.maxLength(50)]], // titleというcontrolを定義
    category: [''], // categoryというcontrolを定義
    text: ['', [Validators.required]], // textというcontrolを定義
    isPublic: [false], // isPublicというcontrolを定義
  });

  // userのIDをとる
  user$: Observable<User> = this.authService.user$; // userはObservableのUserの型
  imageFile: string;

  thumbnailIcon = 'assets/images/icons/add-thumbnail.svg';
  inProgress: boolean;
  titleMaxLength = 50;

  // titleControlに、titleのformControlNameを返す
  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  // textControlに、textのformControlNameを返す
  get textControl(): FormControl {
    return this.form.get('text') as FormControl;
  }

  // categoryControlに、categoryのformControlNameを返す
  get categoryControl(): FormControl {
    return this.form.get('category') as FormControl;
  }

  // isPublicControlに、isPublicのformControlNameを返す
  get isPublicControl(): FormControl {
    return this.form.get('isPublic') as FormControl;
  }

  // croppieのoption
  options: CropperOptions = {
    aspectRatio: 4 / 3, // width / height
    width: 420,
    resultType: 'base64', // base64 | blob
  };
  onCroppedImage(image: string): void {
    this.imageFile = image; // image
  }

  // constructorの引数で、使いたい機能を定義
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private memoService: MemoService,
    private router: Router,
    private snackBer: MatSnackBar,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {}

  submit(): void {
    // submitの関数には引数（input）がない
    const formData = this.form.value; // formDataを、formの中身の値と定義
    const sendData: Omit<
      // sendDataを、uid,title,text,isPublic,categoriesと定義
      Memo,
      'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'thumbnailUrl' | 'random'
    > = {
      uid: this.authService.uid,
      title: formData.title,
      text: formData.text,
      isPublic: formData.isPublic,
      categories: formData.category.split(','),
    };
    // addThumbnailUrl()走るために、画像データを引数で渡す
    this.memoService.createMemo(sendData, this.imageFile); // memoServiceのcreateMemoの引数にsendDataと画像データが入る
    const msg = formData.isPublic // msgにformDataのisPublicの値を入れ、
      ? '記事を投稿しました！' // trueなら、記事を投稿しました
      : '下書きを保存しました！'; // falseなら下書きを保存しました
    this.snackBer.open(msg, null, {
      // snackBerでmsgを表示
      duration: 3000,
    });
    this.router.navigateByUrl('/'); // TopComponentのパスにリダイレクトする
  }
}
