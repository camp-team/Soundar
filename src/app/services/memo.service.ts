import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
}
