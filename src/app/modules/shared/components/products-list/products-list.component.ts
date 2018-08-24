import { Component, Input, } from '@angular/core';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() products: Product[]
  constructor() { }
}