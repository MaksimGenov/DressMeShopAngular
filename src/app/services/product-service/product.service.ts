import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';

@Injectable()
export class ProductService {
  private collection: string = 'products'
  constructor(
    private fetcher: Fetcher,
    private location: Location,
    private notificationService: NotificationService
  ) { }

  createProduct(brand: string, model: string, description: string, price: string, color: string, categories: string[], images: File[]): Observable<Product> {
    let data = new FormData()
    data.append('model', model)
    data.append('brand', brand)
    data.append('description', description)
    data.append('price', price)
    data.append('color', color)
    data.append('categories', JSON.stringify(categories))
    for (let index = 0; index < images.length; index++) {
      data.append('image' + index, images[index])
    }

    return this.fetcher.post<Product>(this.collection, 'create', data)
  }

  getProduct(id: string): Observable<Product> {
    return this.fetcher.get<Product>(this.collection, id)
  }

  deleteProduct(id: string) {
    this.fetcher.delete(this.collection, id)
      .subscribe(
        response => {
          this.location.back()
          this.notificationService.pop('success', 'Product delete successfully!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }

  edit(id: string, brand: string, model: string, description: string, price: string, color: string, categories: string[], images: File[]) {
    let data = new FormData()
    data.append('model', model)
    data.append('brand', brand)
    data.append('description', description)
    data.append('price', price)
    data.append('color', color)
    data.append('categories', JSON.stringify(categories))
    for (let index = 0; index < images.length; index++) {
      data.append('image' + index, images[index])
    }

    this.fetcher.put<Product>(this.collection, id, data)
      .subscribe(
        product => {
          this.location.back()
          this.notificationService.pop('success', 'Product updated sucessfully!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }
}
