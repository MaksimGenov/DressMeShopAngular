import { Component, Input } from '@angular/core';
import { Link } from '../../../../models/Link';
import { AuthService } from '../../../../services/auth-service/auth.service';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent {
  @Input() link: Link
  @Input() className: string
  constructor(private authService: AuthService) { }

  get isAdmin() {
    return this.authService.getRoles().includes("admin")
  }

  get isUser() {
    return this.authService.getRoles().includes("user")
  }

  get isLogged() {
    return this.authService.isLogged()
  }

  isVisiable() {
    if (this.link.protection) {
      if (this.link.protection.admin) 
        return !this.link.hideIfLogged && this.isAdmin
      else if (this.link.protection.user) 
        return !this.link.hideIfLogged && this.isUser
    }

    if (this.isLogged)
      return !this.link.hideIfLogged
      
    return true;
  }
  
}
