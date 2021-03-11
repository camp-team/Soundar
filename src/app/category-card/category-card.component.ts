import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Memo } from '../interfaces/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  memoId: string;
  memo$: Observable<Memo>;
  uid: string;

  // カテゴリーをfor文で回すために、categoriesを定義する
  categories: string[];

  constructor(
    private route: ActivatedRoute,
    private memoService: MemoService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.memo$ = this.route.paramMap.pipe(
      switchMap((param) => {
        // idパラメータを取得
        const id = param.get('id'); // idを、URLのidと定義して
        this.memoId = id; // memoIdに、そのidを代入する
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
}
