import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/Cart';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';
import { HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable()
export class CartService {
  private collection: string = 'carts'
  private cartId: string = localStorage.getItem('cartId')

  constructor(
    private fetcher: Fetcher,
    private notificationService: NotificationService
  ) { }

  get(): Observable<HttpResponse<Cart>> {
    const endpoint = this.collection + '/' + this.cartId
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Cart>(url)
  }

  addProduct(productId: string) {
    const endpoint = this.collection + `/${this.cartId}/addProduct/${productId}`
    const url = environment.apiUrl + endpoint
    this.fetcher.post<string>(url, {})
      .subscribe(
        response => this.notificationService.pop('success', 'Product added to cart.'),
        error => this.notificationService.pop('error', error.error)
      )
  }

  removeProduct(productId: string) {
    const endpoint = this.collection + `/${this.cartId}/removeProduct/${productId}`
    const url = environment.apiUrl + endpoint
    this.fetcher.post<Cart>(url, {})
      .subscribe(
        product => this.notificationService.pop('success', 'Product removed from cart.'),
        error => this.notificationService.pop('error', error.error)
      )
  }
}
