import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine-viewer',
  templateUrl: './magazine-viewer.component.html',
  styleUrls: ['./magazine-viewer.component.scss'],
})
export class MagazineViewerComponent implements OnInit {
  activeIndex: number;
  chapters = [
    { name: 'chapter01', title: 'はじめに' },
    { name: 'chapter02', title: '続いて' },
    { name: 'chapter03', title: 'さらにくわしく' },
    { name: 'chapter04', title: 'ところで' },
    { name: 'chapter05', title: 'このような別のテクニックもあります' },
    { name: 'chapter06', title: 'まとめ' },
  ];
  constructor() {}

  ngOnInit(): void {}

  like(): void {
    alert('like!');
  }
}
