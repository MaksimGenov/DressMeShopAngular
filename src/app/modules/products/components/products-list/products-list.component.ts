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
    let searchDTO = this.generateProductSerchDTO(queryParams)
    this.productService.search(searchDTO)
      .subscribe(response => {
        this.products = response.content
        this.productsTotalCount = response.totalElements
        this.isLoading = false
      })
  }

  generateProductSerchDTO(queryParams: Params): ProductSearchDTO {
    let productSearchDTO = new ProductSearchDTO()
    Object.keys(productSearchDTO).forEach(key => {
        let value = queryParams[key]
        if(key === "sizes" || key === "categories") 
          productSearchDTO[key] = Array.isArray(value) ? [...value] : [value]
        else
          productSearchDTO[key] = value ? value : null
      })

    let page = queryParams.page ? queryParams.page : 1
    let pageSize = queryParams.pageSize ? queryParams.pageSize : this.productsPerPage

    let sort = [{property:'creation_date', direction: 'desc'}]
    let pageRequest = {page, size: pageSize, sort }

    productSearchDTO.pageRequest = pageRequest
      
    return productSearchDTO
  }

}