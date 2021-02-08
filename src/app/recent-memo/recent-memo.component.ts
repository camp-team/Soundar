import { Component, OnInit } from '@angular/core';
import { Memo } from '../interfaces/memo';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-recent-memo',
  templateUrl: './recent-memo.component.html',
  styleUrls: ['./recent-memo.component.scss'],
})
export class RecentMemoComponent implements OnInit {
  recentMemos: Memo[] = new Array(3).fill(
    {
  memoId: 'xxx',
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

  constructor() {}

  ngOnInit(): void {}
}
