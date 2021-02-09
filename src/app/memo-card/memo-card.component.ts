import { Component, Input, OnInit } from '@angular/core';
import { Memo } from '../interfaces/memo';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss'],
})
export class MemoCardComponent implements OnInit {
  @Input() memo: Memo; // htmlは親からデータを受け取って見た目を作るため、componentで親からデータを受け取るために@Inputで指定する
  user$ = this.authService.user$; // userをauthServiceのuser$と定義
// 上の2行を、combineLatestで、User and Memoをつくる

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  like(): void {
    alert('like!');
  }
}
