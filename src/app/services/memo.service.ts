import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

  createMemo() {
    return this.db.doc(`memos/${user.uid}`).set({
      memoId: string,
    });
  }
  // createMemo(
  //   articleId: string,
  //   article: Omit<
  //     Memo,
  //     'memoId' | 'createdAt' | 'updatedAt' | 'likeCount' | 'tags'
  //   >
  // ): Promise<void> {
  //   const resultMemo = {
  //     articleId,
  //     ...article,
  //     likeCount: 0,
  //     createdAt: firebase.firestore.Timestamp.now(),
  //     updatedAt: firebase.firestore.Timestamp.now(),
  //   };
  //   return this.db.doc(`memos/${articleId}`).set(resultMemo);
  // }
}
