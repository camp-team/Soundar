import { Component, Input, OnInit } from '@angular/core';
import { Memo } from '../interfaces/memo';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-next-card',
  templateUrl: './next-card.component.html',
  styleUrls: ['./next-card.component.scss'],
})
export class NextCardComponent implements OnInit {
  @Input() memo: Memo;
  user$ = this.authService.user$; // userをauthServiceのuser$と定義
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  like(): void {
    alert('like!');
  }
}
