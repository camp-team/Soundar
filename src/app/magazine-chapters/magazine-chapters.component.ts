import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine-chapters',
  templateUrl: './magazine-chapters.component.html',
  styleUrls: ['./magazine-chapters.component.scss'],
})
export class MagazineChaptersComponent implements OnInit {
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
}
