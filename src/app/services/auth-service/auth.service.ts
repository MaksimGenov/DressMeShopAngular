import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../models/User';
import { NotificationService } from '../notification-service/notification.service';
import { Fetcher } from '../../utils/Fetcher';

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
    let data = new FormData()
    data.append('username', username)
    data.append('password', password)

    this.fetcher.post<User>(this.collection, 'login', data)
      .subscribe(
        user => this.login(user),
        error => {
          console.log(error)
          this.notificationService.pop('error', error.error)
        }
      )
  }

  register(username: string, password: string, repeatPassword, remeber: boolean) {
    let data = new FormData()
    data.append('username', username)
    data.append('password', password)
    data.append('repeatPassword', repeatPassword)

    this.fetcher.post<User>(this.collection, 'register', data)
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
}
