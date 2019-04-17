import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() link: Link
  @Input("class") klass: string

  constructor(private userService: AuthService) { }

  get isAdmin() {
    return this.userService.getRoles().includes("admin")
  }

  get isUser() {
    return this.userService.getRoles().includes("user")
  }

  get isLogged() {
    return this.userService.isLogged()
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
