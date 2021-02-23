import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-shell',
  templateUrl: './top-shell.component.html',
  styleUrls: ['./top-shell.component.scss'],
})
export class TopShellComponent implements OnInit {
  user$: Observable<User> = this.authService.user$;
  private subscription = new Subscription();

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
  }
  unImplemented(): void {
    alert('未実装です!');
  }
}
