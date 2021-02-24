import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  memos$: Observable<Memo[]> = this.memoService.getlistedMemos();
  constructor(private memoService: MemoService) { }

  ngOnInit(): void {
  }

}
