import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss'],
})
export class ComentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  like(): void {
    alert('like!');
  }

  alertMessage(): void {
    alert('未実装です!');
  }
}
