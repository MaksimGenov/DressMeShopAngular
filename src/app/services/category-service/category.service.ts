import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { Fetcher } from '../../utils/Fetcher';
import { NotificationService } from '../notification-service/notification.service';
import { Router } from '@angular/router';

@Injectable()
export class CategoryService {
  private collection: string = 'categories'

  constructor(
    private fetcher: Fetcher,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  getAllCategories(): Observable<Category[]> {
    console.log('fire')
    return this.fetcher.get<Category[]>(this.collection, 'all')
  }

  getCategoryProducts(id: String): Observable<Product[]> {
    const endpoint = `${id}/products`
    return this.fetcher.get<Product[]>(this.collection, endpoint)
  }

  createCategory(name: string, image: File) {
    let data = new FormData()
    data.append('name', name)
    data.append('image', image)

    return this.fetcher.post<Category>(this.collection, 'create', data)
  }

  delete(id: string, element) {
    this.fetcher.delete(this.collection, id)
      .subscribe(
        () => {
          element.nativeElement.parentElement.removeChild(element.nativeElement)
          this.notificationService.pop('success', 'Category deleted successfully!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }
}
