import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../../models/Brand';
import { Product } from '../../models/Product';
import servicesConfig from '../services-config'

const DB_BASE_URL = servicesConfig.DB_URL

@Injectable()
export class BrandService {

  constructor(private http: HttpClient) { }

  getAllBrands(): Observable<Brand[]> {
    const url = `${DB_BASE_URL}/brands/all`
    return this.http.get<Brand[]>(url)
  }

  getBrandProducts(id: String): Observable<Product[]> {
    const url = `${DB_BASE_URL}/brands/${id}/products`
    return this.http.get<Product[]>(url)
  }

  addBrand(name: string, description: string, image: File): Observable<Brand>{
    let data = new FormData()
    data.append('name', name)
    data.append('description', description)
    data.append('image', image)

    const url = `${DB_BASE_URL}/brands/create`
    return this.http.post<Brand>(url, data)
  }
}
