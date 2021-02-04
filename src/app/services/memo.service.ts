import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  private user: Observable<User> = this.authService.user$;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private authService: AuthService
  ) {}

  createMemo(
    // createMemoの自販機のinputには、memoが入る（omitの中身は除外する）
    memo: Omit<
      Memo,
      'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'categories'
    >
  ): Promise<void> {
    const id = this.db.createId(); // idにFirestoreのdbのcreateIdを入れる
    const resultMemo = {
      // resultMemoのオブジェクトを定義
      memoId: id,
      ...memo,
      likeCount: 0,
      createdAt: firestore.Timestamp.now(),
      updatedAt: firestore.Timestamp.now(),
    };
    return this.db.doc(`memos/${id}`).set(resultMemo); // FirestoreのdbのdocのmemosのmemoIdに、resultMemoの中身を入れる
  }
// サムネイル画像をstorageに保存し、そのURLを取得する
async getThumbnailUrl(uid: string, url: string): Promise<void> { // uidとurlの２つの値を受け取る
  const result = await this.storage
    .ref(`users/${uid}`) // usersのディレクトリの、第１引数で受け渡したuidのディレクトリに、第２引数で受け取ったurlを、resultという変数に代入
    .put(url);
  const photoUrl = await result.ref.getDownloadURL(); // resultの変数の中には、URLを取得するための関数getDownloadURL()が含まれている。awaitで待って、その後photoURLに代入する
  return this.db.doc(`users/${uid}`).update({ // usersのuidディレクトリのavatarUrkをupdate(更新)
    photoUrl,
  });
}
}
