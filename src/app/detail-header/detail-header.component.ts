import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Memo } from '../interfaces/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  memoId: string; // MemoServisでmemoIdからMemoをとってくる memoIdのいれもの
  memo$: Observable<Memo>;
  categories: string[];

  constructor(
    private route: ActivatedRoute,
    private memoService: MemoService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.memo$ = this.route.paramMap.pipe(
      switchMap((param) => {
        const id = param.get('id');
        this.memoId = id;
        // カテゴリを取得する
        const catRef = this.db.collection('memos').doc(id); // memosコレクションの、このURLをidにもつドキュメントを、catRefとする
        catRef.get().subscribe((docSnapshot) => {
          const categories = docSnapshot.get('categories'); // docSnapshotのcategoriesフィールドをcategoriesと定義する
          this.categories = categories; // categoriesの中身を、categoriesに代入する
        });
        return this.memoService.getMemo(id);
      })
    );
  }

  like(): void {
    alert('like!');
  }
}
