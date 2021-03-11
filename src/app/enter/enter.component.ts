import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';
import { provideRoutes, Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user$: Observable<User> = this.authService.user$;
  private subscription = new Subscription();

  google: string;

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  loginGoogle(): void {
    this.authService.login('google');
  }

  loginTwitter(): void {
    this.authService.login('');
  }

  logout(): void {
    this.authService.logout();
  }
}
