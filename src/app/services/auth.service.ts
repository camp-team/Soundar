import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructorの引数で、使いたい機能を定義する
  constructor(
    // AngularFireAuth（認証機能）を定義
    public afAuth: AngularFireAuth,

    // AngularFirestoreのデータベースにアクセス
    private db: AngularFirestore,
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
