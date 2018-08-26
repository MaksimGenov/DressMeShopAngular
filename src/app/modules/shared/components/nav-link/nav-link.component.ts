import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../../models/Link';
import { AuthService } from '../../../../services/auth-service/auth.service';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent {
  @Input() navLink: Link
  @Input() className: string
  constructor(private authService: AuthService) { }

  get isAdmin() {
    return this.authService.isAdmin()
  }

  get isLogged() {
    return this.authService.isLogged()
  }

  get protection() {
    return this.navLink.protection
  }
}
