import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // $はObservableが入っている変数という慣習の命名
  // <User>はinterfaces/userからインポートする
  user$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        return this.db.doc<User>('users/${afUser.uid}').valueChange();
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

  // auth.serviceのメソッド
  login() {
    const provider = new auth.GoogleAuthProvider();

    // 常にどのアカウントでログインするかを確認する
    provider.setCustomParameters({ prompt: 'select_acount' });

    // どのようにログイン画面を表示するか
    this.afAuth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.signOut();
  }
}
