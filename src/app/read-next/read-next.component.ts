import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Memo } from '../interfaces/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.scss'],
})
export class ReadNextComponent implements OnInit {
  memos$: Observable<Memo[]> = this.memoService.getRelationMemos();
  constructor(private memoService: MemoService) {}

  ngOnInit(): void {}

  alertMessage(): void {
    alert('未実装です!');
  }
}
