import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
export class UserShellComponent implements OnInit {
  user$: Observable<User> = this.authService.user$;
  private subscription = new Subscription();
  uid: string;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
  }
}
