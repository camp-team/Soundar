import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // $はObservableが入っている変数という慣習の命名
  // <User>はinterfaces/userからインポートする
  uid: string;
  name: string;
  user$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        this.uid = afUser && afUser.uid;
        return this.db.doc<User>(`users/${afUser.uid}`).valueChanges();
      } else {
        return of(null);
      }
    })
  );

  // constructorの引数で、使いたい機能を定義する
  constructor(
    public afAuth: AngularFireAuth, // AngularFireAuth（認証機能）を定義
    private db: AngularFirestore // AngularFirestoreのデータベースにアクセス
  ) {}

  // auth.serviceのメソッド
  loginGoogle(): void {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }); // 常にどのアカウントでログインするかを確認する
    this.afAuth.signInWithPopup(provider); // どのようにログイン画面を表示するか
  }

  loginTwitter(): void {
    const provider = new auth.TwitterAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }); // 常にどのアカウントでログインするかを確認する
    this.afAuth.signInWithPopup(provider); // どのようにログイン画面を表示するか
  }
  logout(): void {
    this.afAuth.signOut();
  }
}
