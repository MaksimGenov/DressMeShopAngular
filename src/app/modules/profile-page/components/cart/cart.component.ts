import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { OrderItem } from 'src/app/models/OrderItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderItems: OrderItem[]

  constructor(private userServie: AuthService) { }

  ngOnInit() {
    this.userServie.getCart().subscribe(response => this.orderItems = response.body)
  }

  get total() {
    return this.orderItems.reduce((current, next) => current + (+next.product.price), 0).toFixed(2)
  }

  removeProduct(event) {
    const orderItemId = event.target.value
    this.orderItems = this.orderItems.filter(orderItem => Number(orderItem.id) !== Number(orderItemId))
    this.userServie.removeProductFromCart(orderItemId)
  }
}
