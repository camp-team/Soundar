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

  async createMemo(
    // createMemoの自販機のinputには、memoが入る（omitの中身は除外する）
    memo: Omit<
      Memo,
      'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'thumbnailUrl'
    >,
    dataUrl: string
  ): Promise<void> {
    const id = this.db.createId(); // idにFirestoreのdbのcreateIdを入れる
    const thumbnailUrl = await this.getThumbnailUrl(id, dataUrl);
    const resultMemo: Memo = {
      // resultMemoのオブジェクトを定義
      memoId: id,
      ...memo,
      thumbnailUrl,
      likeCount: 0,
      createdAt: firestore.Timestamp.now(),
      updatedAt: firestore.Timestamp.now(),
    };
    return this.db.doc(`memos/${id}`).set(resultMemo); // FirestoreのdbのdocのmemosのmemoIdに、resultMemoの中身を入れる
  }
  // サムネイル画像をstorageに保存し、そのURLを取得する
  async getThumbnailUrl(memoId: string, base64Image: string): Promise<string> {
    // memoIdとbase64Imageの２つの値を受け取る
    const result = await this.storage
      .ref(`memos/${memoId}`) // usersのディレクトリの、第１引数で受け渡したuidのディレクトリに、第２引数で受け取ったurlを、resultという変数に代入
      .putString(base64Image, 'data_url', {
        contentType: 'image/png',
      });
    return result.ref.getDownloadURL(); // resultの変数の中には、URLを取得するための関数getDownloadURL()が含まれている。awaitで待って、その後photoURLに代入する
  }
}
