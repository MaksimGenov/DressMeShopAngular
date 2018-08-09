import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Product } from '../../../../models/Product';
import { Observable } from '../../../../../../node_modules/rxjs';
import { FormGroup, FormControl } from '../../../../../../node_modules/@angular/forms';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[]
  constructor() { }

  ngOnInit() {
    console.log(this.products)
  }
}