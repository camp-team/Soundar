import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  user$ = this.authService.user$

  constructor(private authService:AuthService) {
    login() {
      this.authService.login();
    }

    logout() {
      this.authService.logout();
    }

   }

  ngOnInit(): void {
  }

}
