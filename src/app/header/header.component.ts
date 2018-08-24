import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  get isAdmin() {
    return this.authService.isAdmin()
  }

  get isLogged() {
    return this.authService.isLogged()
  }

  get username() {
    return this.authService.username
  }

  logout() {
    this.authService.logout()
  }
}
