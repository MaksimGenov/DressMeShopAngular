import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../models/User';
import { NotificationService } from '../notification-service/notification.service';
import { Fetcher } from '../../utils/Fetcher';
import { environment } from 'src/environments/environment'
import { OrderItem } from 'src/app/models/OrderItem';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { OrderItemCreateDto } from 'src/app/models/OrderItemCreateDto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _usernamePattern: RegExp = /^[a-zA-Z]\w{2,20}$/
  private _passwordPattern: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/
  private collection: string = 'users'

  constructor(
    private fetcher: Fetcher,
    private router: Router,
    private location: Location,
    private notificationService: NotificationService
  ) { }

  signIn(username: string, password: string, remeber: boolean) {
    let data = {
      'username': username,
      'password': password
    }

    const endpoint = this.collection + '/login'
    const url = environment.apiUrl + endpoint

    this.fetcher.post<User>(url, data)
      .subscribe(
        user => this.login(user),
        error => {
          console.log(error)
          this.notificationService.pop('error', error.error)
        }
      )
  }

  register(username: string, password: string, repeatPassword, remeber: boolean) {
    let data  = {
      'username': username,
      'password': password,
      'confirmedPassword': repeatPassword,
      'email': 'maximgenov@abv.bg'
    }

    const endpoint = this.collection + '/register'
    const url = environment.apiUrl + endpoint

    this.fetcher.post<User>(url, data)
      .subscribe(
        user => this.login(user),
        error => this.notificationService.pop('error', error.error)
      )
  }

  private login(user: User) {
    localStorage.setItem('roles', JSON.stringify(user.roles))
    localStorage.setItem('token', user.token)
    localStorage.setItem('username', user.username)
    localStorage.setItem('cartId', user.cartId)
    this.router.navigateByUrl('/home')
    this.notificationService.pop('success', `Welcome, ${user.username}!`)
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('home')
    this.notificationService.pop('success', 'Logout successful!')
  }

  get token(): string {
    return localStorage.getItem('token')
  }

  get username(): string {
    return localStorage.getItem('username')
  }

  get cartId(): string {
    return localStorage.getItem('cartId')
  }

  get roles(): string[] {
    return JSON.parse(localStorage.getItem('roles')) || []
  }

  get usernamePattern() {
    return this._usernamePattern
  }

  get passwordPattern() {
    return this._passwordPattern
  }

  isLogged(): boolean {
    return this.token !== null
  }

  isAdmin(): boolean {
    return this.roles.includes('admin')
  }

  getCart(): Observable<HttpResponse<OrderItem[]>> {
    const endpoint = this.collection + '/get-cart-items'
    const url = environment.apiUrl + endpoint

    return this.fetcher.get<OrderItem[]>(url);
  }

  addProductToCart(orderItem: OrderItemCreateDto): void {
    const endpoint = this.collection + '/add-order-item-to-cart'
    const url = environment.apiUrl + endpoint

    this.fetcher.post(url, orderItem).subscribe(response => this.notificationService.pop("success", "Product added successfully."))
  }

  removeProductFromCart(id) {
    const endpoint = this.collection + "/remove-order-item-from-cart/" + id
    const url = environment.apiUrl + endpoint

    this.fetcher.delete(url).subscribe(response => this.notificationService.pop("success", "Product removed from cart."))
  }
}
