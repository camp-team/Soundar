import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  private user: Observable<User> = this.authService.user$;

  constructor(private db: AngularFirestore, private authService: AuthService) {}

  createMemo(
    memo: Omit<
      Memo,
      'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'tags'
    >
  ): Promise<void> {
    const id = this.db.createId();
    const resultMemo = {
      memoId: id,
      ...memo,
      likeCount: 0,
      createdAt: firestore.Timestamp.now(),
      updatedAt: firestore.Timestamp.now(),
    };
    return this.db.doc(`memos/${id}`).set(resultMemo);
  }

  // FireStoreのmemosコレクションのドキュメントをとってくる（一覧）
  // observable - データの流れ道
  getMemos(): Observable<Memo[]> {
    return this.db.collection<Memo>(`memos`).valueChanges();
  }

  // FireStoreのmemosコレクションのドキュメントを一つ取ってくる（詳細）
  // getMemo(): Observable<Memo> {
  //   return this.db.doc<Memo>(`memos/${memoId}`).valueChanges();
  // }

  // 最新のmemo（recent memo）を3件取ってくる(recent memo)
  // getRecentMemos(
  //   uid: string,
  //   lastNote?: Memo,
  // ): Observable<{ memos: Memos[]; lastNote: Memo }> {
  // const memo$ = this.db.collection<Memo>('memos', (ref) => {
  //   let query = ref
  //   .where('uid', '==', uid)
  //   .orderBy('createdAt', 'desc')
  //   .limit(3);
  //   if (lastNote) {
  //     query = query.startAfter(lastNote.createdAt);
  //   }
  //   return query;
  // })
  // .valueChanges();
  // retrun memo$.pipe(
  //   map((memos) => {
  //     return {
  //       memos,
  //       lastNote: memos[memos.length - 1],
  //     };
  //   })
  // );
  // }
}
