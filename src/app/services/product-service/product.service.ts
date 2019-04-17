import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Page } from 'src/app/models/Page';
import { ProductCreateDTO } from 'src/app/models/product/ProductCreateDTO';
import { ProductUpdateDTO } from 'src/app/models/product/ProductUpdateDTO';
import { FormDataBuilder } from 'src/app/utils/FormDataBuilder/FormDataBuilder';
import { ProductSearchDTO } from 'src/app/models/product/ProductSearchDTO';

@Injectable()
export class ProductService {
  private collection: string = 'products'
  constructor(
    private fetcher: Fetcher,
    private location: Location,
    private notificationService: NotificationService,
    private formDataBuilder: FormDataBuilder
  ) { }

  create(product: ProductCreateDTO, images?: File[]): Observable<Product> {
    product.categories = product.categories.filter(c => c != null && typeof c != 'undefined')
    let data = this.formDataBuilder.generate({ product: JSON.stringify(product) }, [{ name: 'images', files: images }])

    const endpoint = this.collection + '/create'
    const url = environment.apiUrl + endpoint
    let headers = new HttpHeaders({ 'Content-Type': undefined }) 
    return this.fetcher.post<Product>(url, data)
  }

  get(id: string): Observable<HttpResponse<Product>> {
    const endpoint = this.collection + '/' + id
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Product>(url)
  }

  delete(id: string): Observable<any> {
    const endpoint = this.collection + '/delete/' + id
    const url = environment.apiUrl + endpoint
    return this.fetcher.delete(url)
  }

  edit(product: ProductUpdateDTO, images: File[]) {
    let data = this.formDataBuilder.generate(product, [{ name: 'images', files: images }])

    const endpoint = this.collection + '/edit'
    const url = environment.apiUrl + endpoint
    this.fetcher.put<Product>(url, data)
      .subscribe(
        product => {
          this.location.back()
          this.notificationService.success('Product updated sucessfully!')
        },
        error => this.notificationService.error(error.error)
      )
  }

  search(productSearchDTO: ProductSearchDTO): Observable<Page<Product>> {
    const endpoint = this.collection + '/search'
    const url = environment.apiUrl + endpoint
    return this.fetcher.post<Page<Product>>(url, productSearchDTO);
  }

  deleteImages(productId: string, imagesId: string[]) {
    const endpoint = this.collection + '/' + productId +'/delete-images'
    const url = environment.apiUrl + endpoint
    return this.fetcher.post(url, imagesId);
  }
}
