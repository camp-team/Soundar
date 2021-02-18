import { Component, OnInit } from '@angular/core';
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
  constructor(private route: ActivatedRoute, private memoService: MemoService) {}


  // getMemo(): void {
  //   this.getMemo();
  // }
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
