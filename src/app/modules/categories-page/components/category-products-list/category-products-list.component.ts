import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/Product';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products-list',
  templateUrl: './category-products-list.component.html',
  styleUrls: ['./category-products-list.component.css']
})
export class CategoryProductsListComponent implements OnInit {
  products: Product[]
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryId = params.id
      this.categoryService.getCategoryProducts(categoryId).subscribe(products => this.products = products)
    })
  }

}
