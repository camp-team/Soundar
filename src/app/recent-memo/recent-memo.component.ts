import { Component, Input, OnInit } from '@angular/core';
import { Memo } from '../interfaces/memo';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { MemoService } from '../services/memo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recent-memo',
  templateUrl: './recent-memo.component.html',
  styleUrls: ['./recent-memo.component.scss'],
})
export class RecentMemoComponent implements OnInit {
  memos$: Observable<Memo[]> = this.memoService.getMemos();



  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private memoService: MemoService
  ) {}

  ngOnInit(): void {}
}
