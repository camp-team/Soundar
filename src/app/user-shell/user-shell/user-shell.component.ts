import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
export class UserShellComponent implements OnInit {
  user$: Observable<User> = this.authService.user$;
  private subscription = new Subscription();

  constructor(public authService: AuthService, private router: Router, private location: Location, ) {}

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
  }
  unImplemented(): void {
    alert('未実装です!');
  }
  cancel(): void {
    this.location.back();
  }
}
