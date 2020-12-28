import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  user$: Observable<User> = this.authService.user$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginTwitter() {
    this.authService.loginTwitter();
  }

  logout() {
    this.authService.logout();
  }
}
