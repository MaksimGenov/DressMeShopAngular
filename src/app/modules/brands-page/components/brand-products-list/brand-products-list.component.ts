import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../../../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { Observable } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-brand-products-list',
  templateUrl: './brand-products-list.component.html',
  styleUrls: ['./brand-products-list.component.css']
})
export class BrandProductsListComponent implements OnInit {
  products: Product[]
  searchQuery: any
  productsToShow: Product[]
  constructor(private route: ActivatedRoute, private brandService: BrandService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const brandId = params.id
      this.brandService.getBrandProducts(brandId).subscribe(products => {
        this.products = products
        this.productsToShow = products
        console.log(this.products)
      })
      // this.products = this.brandService.getBrandProducts(brandId)
    })
  }
 
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes)
  // }

  // ngDoCheck() {
  //   console.log(this.searchQuery)
  // }

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
