import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  navLinks: Link[] = [
    {name: 'Add Brand', url:'addBrand', protection: {admin: true, user: false}},
    {name: 'Add Category', url: 'addCategory', protection: {admin: true, user: false}},
    {name: 'Add Product', url: 'addProduct', protection: {admin: true, user: false}}
  ]
  constructor() { }

  ngOnInit() {
  }

}
