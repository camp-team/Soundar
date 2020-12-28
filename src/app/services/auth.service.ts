import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  // $はObservableが入っている変数という慣習の命名
  // <User>はinterfaces/userからインポートする
  user$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        return this.db.doc<User>('users/${afUser.uid}').valueChanges();
      } else {
        return of(null);
      }
    })
  );

  // constructorの引数で、使いたい機能を定義する
  constructor(
    // AngularFireAuth（認証機能）を定義
    public afAuth: AngularFireAuth,

    // AngularFirestoreのデータベースにアクセス
    private db: AngularFirestore
  ) {}
  ngOnInit(): void {

  }

  // auth.serviceのメソッド
  loginGoogle() {
    const provider = new auth.GoogleAuthProvider();

    // 常にどのアカウントでログインするかを確認する
    provider.setCustomParameters({ prompt: 'select_account' });

    // どのようにログイン画面を表示するか
    this.afAuth.signInWithPopup(provider);
  }

  loginTwitter() {
    const provider = new auth.TwitterAuthProvider();

    // 常にどのアカウントでログインするかを確認する
    provider.setCustomParameters({ prompt: 'select_account' });

    // どのようにログイン画面を表示するか
    this.afAuth.signInWithPopup(provider);
  }
  logout() {
    this.afAuth.signOut();
  }
}
