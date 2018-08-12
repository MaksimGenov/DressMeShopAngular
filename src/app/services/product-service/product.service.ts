import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import servicesConfig from '../services-config'

const DB_BASE_URL = servicesConfig.DB_URL
const collection = servicesConfig.collections.products

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(brandId: string, model: string, description: string, price: string, color: string, categoriesIds: string[], images: File[]): Observable<Product> {
    let data = new FormData()
    data.append('model', model)
    data.append('brandId', brandId)
    data.append('description', description)
    data.append('price', price)
    data.append('color', color)
    data.append('categoriesIds', JSON.stringify(categoriesIds))
    for (let index = 0; index < images.length; index++) {
      data.append('image' + index, images[index])
    }

    const url = `${DB_BASE_URL}/${collection}/create`
   
    return this.http.post<Product>(url, data)
  }

  getProduct(id: string): Observable<Product> {
    const url = `${DB_BASE_URL}/${collection}/get/${id}`
    return this.http.get<Product>(url)
  }
}
