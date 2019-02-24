import { Injectable, ElementRef } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../models/Brand';
import { Product } from '../../models/Product';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';
import { HttpResponse } from '@angular/common/http';
import { Page } from 'src/app/models/Page';
import { environment } from 'src/environments/environment'

@Injectable()
export class BrandService {
  private collection: string = 'brands'

  constructor(
    private fetcher: Fetcher,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getAll(page?: number, limit?: number): Observable<HttpResponse<Brand[]>> {
    const endpoint = this.collection + '/all'
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Brand[]>(url)
  }

  getPage(queryParams: Params): Observable<HttpResponse<Page<Brand>>> {
    const endpoint = this.collection + `?page=${queryParams.page}&size=${queryParams.pageSize}&sort=name`
    const url = environment.apiUrl + endpoint;
    return this.fetcher.get<Page<Brand>>(url)
  }

  getProductsPage(id: String, page: number, size: number): Observable<HttpResponse<Product[]>> {
    const endpoint = `${id}/products?page=${page}&size=${size}`
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Product[]>(url)
  }

  create(name: string, description: string, image: File): Observable<Brand> {
    let data = new FormData()
    data.append('name', name)
    data.append('description', description)
    data.append('image', image)

    const endpoint = this.collection + '/create'
    const url = environment.apiUrl + endpoint

    return this.fetcher.post<Brand>(url, data)
  }

  delete(id: string, element: ElementRef) {
    const endpoint = this.collection + '/delete/' + id
    const url = environment.apiUrl + endpoint
    this.fetcher.delete(url)
      .subscribe(
        () => {
          element.nativeElement.parentElement.removeChild(element.nativeElement)
          this.notificationService.pop('success', "Brand and all of it's products deleted successfully!")
        },
        error => this.notificationService.pop('error', error.error)
      )
  }

  get(id: string): Observable<HttpResponse<Brand>> {
    const endpoint = this.collection + '/' + id
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Brand>(url)
  }

  edit(id: string, name: string, description: string, image: File) {
    let data = new FormData()
    data.append('id', id)
    data.append('name', name)
    data.append('description', description)
    data.append('image', image)

    const endpoint = this.collection + '/edit'
    const url = environment.apiUrl + endpoint

    this.fetcher.put(url, data)
      .subscribe(
        brand => {
          this.router.navigateByUrl('/brands')
          this.notificationService.pop('success', 'Brand updated successuflly!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }
}
