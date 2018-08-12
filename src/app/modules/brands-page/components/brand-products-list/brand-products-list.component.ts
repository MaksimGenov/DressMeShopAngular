import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../../models/Product';
import { BrandService } from '../../../../services/brand-service/brand.service';

@Component({
  selector: 'app-brand-products-list',
  templateUrl: './brand-products-list.component.html',
  styleUrls: ['./brand-products-list.component.css']
})
export class BrandProductsListComponent implements OnInit {
  private isLoading: Boolean = true
  private products: Product[]
  private productsToShow: Product[]
  searchQuery: any
  constructor(private route: ActivatedRoute, private brandService: BrandService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const brandId = params.id
      this.brandService.getBrandProducts(brandId).subscribe(products => {
        this.products = products
        this.productsToShow = products
        this.isLoading = false
        console.log(this.products)
      })
    })
  }

  updateQuery(event) {
    console.log(event)
    
    this.productsToShow = this.products.filter(product => {
      if (product.model.includes(event.model) && +product.price === +event.price){
        return product
      }
    })
    console.log(this.productsToShow)
  }
}
