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
  memoId: string;
  memo$: Observable<Memo>;
  constructor(
    private route: ActivatedRoute,
    private memoService: MemoService
  ) {}

  ngOnInit(): void {
    this.memo$ = this.route.paramMap.pipe(
      switchMap((param) => {
        const id = param.get('id');
        this.memoId = id;
        return this.memoService.getMemo(id);
      })
    );
  }
}
