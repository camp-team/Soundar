import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

/**
 * ここからはこのコンポーネントで使う型の定義を書く
 */
export class PostComponent implements OnInit {
  isActive: boolean; // isActiveにはboolean（真偽値）がはいる

  // thisは、プログラム内のどこでもいつでも単体で利用できる特別な存在です。
  // 単独で呼び出せるのが関数、変数や値につけて呼び出すのがメソッド
  form: FormGroup = this.fb.group({
    content: [''],
    title: [''],
  });
  constructor(private fb: FormBuilder) {} // PostComponentクラスの型の利用

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  active() {
    this.isActive = !this.isActive;
  }
}
