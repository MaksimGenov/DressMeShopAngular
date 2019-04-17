import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification-service/notification.service';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkRole()
  }

  checkRole(): boolean {
    if (this.authService.isAdmin()) {
      return true
    }

    this.router.navigateByUrl('home')
    this.notificationService.error("You are not authorized for this section!")
  }
}
