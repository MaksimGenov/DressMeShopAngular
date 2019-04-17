import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  links: Link[] = [
    {name: 'Add Product', url: '/admin/add/product', protection: {admin: true, user: false}},
    {name: 'Add Brand', url:'/admin/add/brand', protection: {admin: true, user: false}},
    {name: 'Add Category', url: '/admin/add/category', protection: {admin: true, user: false}},
    {name: 'Add Size', url: '/admin/add/size', protection: {admin: true, user: false}},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
