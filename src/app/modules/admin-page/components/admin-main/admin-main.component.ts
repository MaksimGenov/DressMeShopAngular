import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  navLinks: Link[] = [
    {name: 'Add Brand', url:'addBrand'},
    {name: 'Add Category', url: 'addCategory'},
    {name: 'Add Product', url: 'addProduct'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
