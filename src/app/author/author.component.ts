import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Memo } from '../interfaces/memo';
import { AuthService } from '../services/auth.service';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  memoId: string; // MemoServisでmemoIdからMemoをとってくる memoIdのいれもの
  memo$: Observable<Memo>;
  user$ = this.authService.user$; // userをauthServiceのuser$と定義
  constructor(
    private authService: AuthService,
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
