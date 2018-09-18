import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../../models/Cart';
import { CartService } from '../../../../services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => this.cart = cart)
  }

  get products() {
    return this.cart.products
  }

  set products(products) {
    this.cart.products = products
  }

  get total() {
    return this.products.reduce((current, next) => current + (+next.price), 0).toFixed(2)
  }

  removeProduct(event) {
    const productId = event.target.value
    this.cartService.removeProduct(productId)
    this.products = this.products.filter(product => product._id !== productId)
  }
}
