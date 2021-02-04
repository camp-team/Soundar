import { Component, Input, OnInit } from '@angular/core';
import { Memo } from '../interfaces/memo';

@Component({
  selector: 'app-memo-card',
  templateUrl: './memo-card.component.html',
  styleUrls: ['./memo-card.component.scss'],
})
export class MemoCardComponent implements OnInit {
  @Input() memo: Memo; // htmlは親からデータを受け取って見た目を作るため、componentで親からデータを受け取るために@Inputで指定する

  constructor() {}

  ngOnInit(): void {}
}
