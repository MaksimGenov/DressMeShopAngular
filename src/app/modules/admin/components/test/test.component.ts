import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  selectedCategories: string[] = ["shoes", "basketball", "test"]
  categoriesDropdownList: string[] = ['shoes', 'socks', 't-shirts', 'basketball', 'aaaaaaaaaaaa', 'bbbbbbbbbbb'
  , 'ccccccccccccccccccccccccccc']
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  onCategorySelect(categories) {
    console.log(categories)
  }
}
