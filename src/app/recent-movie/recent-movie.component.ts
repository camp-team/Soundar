import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-movie',
  templateUrl: './recent-movie.component.html',
  styleUrls: ['./recent-movie.component.scss'],
})
export class RecentMovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  alertMessage(): void {
    alert('未実装です!');
  }
}
