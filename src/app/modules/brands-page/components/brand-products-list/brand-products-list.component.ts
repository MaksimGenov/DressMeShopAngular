import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../../models/Product';
import { BrandService } from '../../../../services/brand-service/brand.service';

@Component({
  selector: 'app-brand-products-list',
  templateUrl: './brand-products-list.component.html',
  styleUrls: ['./brand-products-list.component.css']
})
export class BrandProductsListComponent implements OnInit {
  isLoading: Boolean = true
  products: Product[]
  productsToShow: Product[]
  
  constructor(private route: ActivatedRoute, private brandService: BrandService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const brandId = params.id
      this.brandService.getBrandProducts(brandId).subscribe(products => {
        this.products = products
        this.productsToShow = products
        this.isLoading = false
      })
    })
  }
}
