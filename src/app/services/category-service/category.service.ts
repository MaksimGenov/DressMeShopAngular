import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';
import servicesConfig from '../services-config';
import { Product } from '../../models/Product';

const DB_URL = servicesConfig.DB_URL

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    const url = `${DB_URL}/categories/all`
    return this.http.get<Category[]>(url)
  }

  getCategoryProducts(id: String): Observable<Product[]> {
    const url = `${DB_URL}/categories/${id}/products`
    return this.http.get<Product[]>(url)
  }

  createCategory(name: string, image: File) {
    let data = new FormData()
    data.append('name', name)
    data.append('image', image)
    const url = `${DB_URL}/categories/create`
    return this.http.post<Category>(url, data)
  }
}
