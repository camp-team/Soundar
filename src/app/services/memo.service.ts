import { ClassGetter } from '@angular/compiler/src/output/output_ast';
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

  // addThumbnailUrl()のメソッドをcreateMemoに混ぜてしまえば良い
  // resultMemoにthumbnailUrlを入れたい→34行目
  // createMemoの引数に画像を設定する（thumbnailをメモに混ぜるため）→32行目
  // URLを取得するためにgetDownloadURL()をreturnで返す→57行目　（57行目に）promiseは勝手に解決されるので、awaitは書かなくていい
  // promiseの中身の値を受け取るには、awaitが必要（37行目）、さらにawaitつけるためには、親の関数にasyncをつけておく（28行目）
  async createMemo(
    // createMemoの自販機のinputには、memo（Memoの型）とdataUrl（サムネイル画像）が入る（omitの中身は除外する）
    memo: Omit<
      Memo,
      | 'memoId'
      | 'createdAt'
      | 'updatedAt'
      | 'likeCount'
      | 'thumbnailUrl'
      | 'random'
    >,
    dataUrl: string
  ): Promise<void> {
    const id = this.db.createId(); // idをfirestoreのcreateId()で作られるidと定義
    const thumbnailUrl = await this.addThumbnailUrl(id, dataUrl);
    const resultMemo: Memo = {
      // resultMemoのオブジェクトを定義
      memoId: id,
      ...memo,
      thumbnailUrl,
      likeCount: 0,
      createdAt: firestore.Timestamp.now(),
      updatedAt: firestore.Timestamp.now(),
      random: Math.floor(Math.random() * 100),
    };
    return this.db.doc(`memos/${id}`).set(resultMemo); // FirestoreのdbのdocのmemosのmemoIdのドキュメントに、resultMemoの中身を入れる(set)
  }
  // サムネイル画像をstorageに保存(addThumbnailUrl())
  // URLを返すので、型はstring(Promise<string>)
  async addThumbnailUrl(memoId: string, base64Image: string): Promise<string> {
    // memoIdとbase64Imageの２つの値を受け取る
    const result = await this.storage
      .ref(`memos/${memoId}`) // usersのディレクトリの、第１引数で受け渡したuidのディレクトリに、第２引数で受け取ったurlを、resultという変数に代入
      .putString(base64Image, 'data_url', {
        contentType: 'image/png',
      });
    return result.ref.getDownloadURL(); // resultの変数の中には、URLを取得するための関数getDownloadURL()が含まれている。awaitで待って、その後photoURLに代入する
  }

  // メモを書いたユーザーの名前を取得する
  getAuthor(uid: string): Observable<User> {
    return this.db.doc<User>(`users/${name}`).valueChanges();
  }

  // FireStoreのmemosコレクションのドキュメントをとってくる（一覧）
  // observable - データの流れ道
  getMemos(): Observable<Memo[]> {
    return this.db.collection<Memo>(`memos`).valueChanges();
  }

  // FireStoreのmemosコレクションのドキュメントを一つ取ってくる（詳細）

  // 最新のmemo（recent memo）を3件取ってくる(recent memo)
  getRecentMemos(): Observable<Memo[]> {
    return this.db
      .collection<Memo>(`memos`, (ref) => {
        return ref.orderBy('createdAt', 'desc').limit(3);
      })
      .valueChanges();
  }

  // ランダムでメモを3件取ってくる
  getRelationMemos(): Observable<Memo[]> {
    return this.db
      .collection<Memo>(`memos`, (ref) => {
        return ref.where('random', '>', Math.floor(Math.random() * 100))
        .orderBy('random', 'asc').limit(3);
      })
      .valueChanges();
  }

  // リスト表示用にメモを9件取ってくる
  getlistedMemos(): Observable<Memo[]> {
    return this.db
      .collection<Memo>(`memos`, (ref) => {
        return ref.orderBy('createdAt', 'desc').limit(9);
      })
      .valueChanges();
  }

  // メモのドキュメントを取得
  getMemo(id: string): Observable<Memo> {
    return this.db.doc<Memo>(`memos/${id}`).valueChanges();
  }
}
