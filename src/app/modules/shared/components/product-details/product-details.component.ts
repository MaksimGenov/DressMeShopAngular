import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product-service/product.service';
import { Product } from '../../../../models/Product';
import { CartService } from '../../../../services/cart-service/cart.service';
import { AuthService } from '../../../../services/auth-service/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product: Product
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params.id
      this.productService.getProduct(productId).subscribe(product => this.product = product)
    })
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product._id)
  }

  addToCart() {
    this.cartService.addProduct(this.product._id)
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin()
  }

  get isLogged(): boolean {
    return this.authService.isLogged()
  }
}
