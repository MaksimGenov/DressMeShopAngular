import { Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../models/Brand';
import { Product } from '../../models/Product';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';

@Injectable()
export class BrandService {
  private collection: string = 'brands'

  constructor(
    private fetcher: Fetcher,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getAllBrands(): Observable<Brand[]> {
    return this.fetcher.get<Brand[]>(this.collection, 'all')
  }

  getBrandProducts(id: String): Observable<Product[]> {
    const endpoint = `${id}/products`
    return this.fetcher.get<Product[]>(this.collection, endpoint)
  }

  addBrand(name: string, description: string, image: File): Observable<Brand> {
    let data = new FormData()
    data.append('name', name)
    data.append('description', description)
    data.append('image', image)

    return this.fetcher.post<Brand>(this.collection, 'create', data)
  }

  delete(id: string, element: ElementRef) {
    this.fetcher.delete(this.collection, id)
      .subscribe(
        () => {
          element.nativeElement.parentElement.removeChild(element.nativeElement)
          this.notificationService.pop('success', "Brand and all of it's products deleted successfully!")
        },
        error => this.notificationService.pop('error', error.error)
      )
  }

  getById(id: string): Observable<Brand> {
    return this.fetcher.get<Brand>(this.collection, id)
  }

  edit(id: string, name: string, description: string, image: File) {
    let data = new FormData()
    data.append('name', name)
    data.append('description', description)
    data.append('image', image)
    this.fetcher.put(this.collection, id, data)
      .subscribe(
        brand => {
          this.router.navigateByUrl('/brands')
          this.notificationService.pop('success', 'Brand updated successuflly!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }
}
