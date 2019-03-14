import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean
  links: Link[]

  constructor(private userService: AuthService) { 
    this.toogle = this.toogle.bind(this)
  }

  ngOnInit() {
    this.links = [
      {name: "brands", url: "brands"},
      {name: "categories", url: "/categories"},
      {name: "cart", url: "user/cart", protection: {admin: false, user:true}},
      {name: "admin", url: "/admin", protection: {admin: true, user:false}},
      {name: "login", url: "auth/login", hideIfLogged: true},
      {name: "register", url: "auth/register", hideIfLogged: true}
    ]
  }

  get isLogged(): boolean {
    return this.userService.isLogged()
  }

  toogle() {
    this.isOpen = !this.isOpen
  }

  logout() {
    this.userService.logout()
  }
}
