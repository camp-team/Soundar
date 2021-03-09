import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine-viewer',
  templateUrl: './magazine-viewer.component.html',
  styleUrls: ['./magazine-viewer.component.scss'],
})
export class MagazineViewerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  like(): void {
    alert('like!');
  }
}
