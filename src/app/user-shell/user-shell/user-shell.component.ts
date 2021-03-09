import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
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

  noBackArrow: boolean;
  constructor(
    public authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = this.getChildRoute(this.router.routerState.snapshot.root);

        // 最後にこのルートに来た時にisSidenavOpenの値を差し替えてあげる処理をしています
        this.noBackArrow = route.data.noBackArrow;
      }
    });
  }
  private getChildRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (!route.children.length) {
      // 回りきった後、最後routeを返してあげます。
      return route;
    } else {
      return this.getChildRoute(route.children[0]);
    }
  }

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
  }

  alertMessage(): void {
    alert('未実装です!');
  }

  cancel(): void {
    this.location.back();
  }
}
