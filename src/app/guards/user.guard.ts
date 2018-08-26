import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { NotificationService } from '../services/notification-service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkRole()
  }

  checkRole(): boolean {
    if (this.authService.isLogged()) {
      return true
    }

    this.router.navigate(['home'])
    this.notificationService.pop('error', "You are not logged!")
  }
}
