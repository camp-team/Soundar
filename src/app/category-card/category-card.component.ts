import { Component, OnInit } from '@angular/core';
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
  memo$: Observable<Memo> = this.route.paramMap.pipe(
    switchMap((param) => {
      const id = param.get('id'); // idを、URLのidと定義して
      return this.memoService.getMemo(id); // memosコレクションの、このURLをidにもつドキュメントを、catRefとする
    })
  );
  uid: string;

  // カテゴリーをfor文で回すために、categoriesを定義する
  categories: string[];

  constructor(
    private route: ActivatedRoute,
    private memoService: MemoService
  ) {}

  ngOnInit(): void {}
}
