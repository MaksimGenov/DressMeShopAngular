import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/Cart';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';

@Injectable()
export class CartService {
  private collectionName: string = 'carts'
  private cartId: string = localStorage.getItem('cartId')

  constructor(
    private fetcher: Fetcher,
    private notificationService: NotificationService
  ) { }

  getCart(): Observable<Cart> {
    return this.fetcher.get<Cart>(this.collectionName, this.cartId)
  }

  addProduct(productId: string) {
    const endpoint = `${this.cartId}/addProduct/${productId}`
    this.fetcher.post<string>(this.collectionName, endpoint, {})
      .subscribe(
        response => this.notificationService.pop('success', 'Product added to cart.'),
        error => this.notificationService.pop('error', error.error)
      )
  }

  removeProduct(productId: string) {
    const endpoint = `${this.cartId}/removeProduct/${productId}`
    this.fetcher.post<Cart>(this.collectionName, endpoint, {})
      .subscribe(
        product => this.notificationService.pop('success', 'Product removed from cart.'),
        error => this.notificationService.pop('error', error.error)
      )
  }
}
