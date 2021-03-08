import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-recent-memo',
  templateUrl: './recent-memo.component.html',
  styleUrls: ['./recent-memo.component.scss'],
})
export class RecentMemoComponent implements OnInit {
  memos$: Observable<Memo[]> = this.memoService.getRecentMemos();

  constructor(
    private memoService: MemoService
  ) {}

  ngOnInit(): void {}
}
