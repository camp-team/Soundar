import { Component, Input, OnInit } from '@angular/core';
import { Memo } from '../interfaces/memo';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-recent-memo',
  templateUrl: './recent-memo.component.html',
  styleUrls: ['./recent-memo.component.scss'],
})
export class RecentMemoComponent implements OnInit {
  // @Input() memo: Memo;
  private memo: Memo;

  recentMemos: Memo[] = new Array(3).fill(
    {
      memoId: this.memoService.getMemoId(this.memo.memoId),
      thumbnailUrl: 'http://localhost:4200/assets/images/user-icon-example.jpg',
      title: 'xxx',
      categories: 'xxx',
      text: 'xxx',
      isPublic: true,
      likeCount: 50,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
      uid: 'xxx',
    } // recentMemosはMemoの配列であると定義
  );

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private memoService: MemoService
  ) {}

  ngOnInit(): void {}
}
