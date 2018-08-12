import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { ProductService } from '../../../../services/product-service/product.service';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product: Product
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params.id
      this.productService.getProduct(productId).subscribe(product => this.product = product)
    })
  }

}
