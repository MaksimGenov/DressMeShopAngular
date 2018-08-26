import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent {
  private navLinks: Link[] = [
    {
      name: 'Brands',
      url: 'brands',
      protection: null
    },
    {
      name: 'Categories',
      url: 'categories',
      protection: null
    },
    {
      name: 'Admin',
      url: '/admin',
      protection: {
        admin: true,
        user: false
      }
    },
    {
      name: 'Cart',
      url: '/user/cart',
      protection: {
        admin: false,
        user: true
      }
    }
  ]
  constructor() { }

}
