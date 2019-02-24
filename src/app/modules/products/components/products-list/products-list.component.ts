import { Component, OnInit, } from '@angular/core';
import { Product } from '../../../../models/Product';
import { ProductService } from 'src/app/services/product-service/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductSearchDTO } from 'src/app/models/product/ProductSearchDTO';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[]
  isLoading: boolean
  productsTotalCount: number
  productsPerPage: number = 5

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.loadProducts(queryParams))
  }

  loadProducts(queryParams: Params): void {
    this.isLoading = true
    this.productService.search(this.generateProductSerchDTO(queryParams))
      .subscribe(response => {
        this.products = response.content
        this.productsTotalCount = response.totalElements
        this.isLoading = false
      })
  }

  generateProductSerchDTO(queryParams: Params): ProductSearchDTO {
    let productSearchDTO = new ProductSearchDTO()
    Object.keys(productSearchDTO)
      .forEach(key => {
        let item = queryParams[key]
        if(key === "sizes" || key === "categories") 
          productSearchDTO[key] = Array.isArray(item) ? [...item] : [item]
        else
          productSearchDTO[key] = item ? item : null
      })

    if (typeof productSearchDTO.page === 'undefined')
      productSearchDTO.page = 1
    if (typeof productSearchDTO.pageSize === 'undefined')
      productSearchDTO.pageSize = this.productsPerPage
      
    return productSearchDTO
  }

}