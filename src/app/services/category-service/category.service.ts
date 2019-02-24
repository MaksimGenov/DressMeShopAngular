import { Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/Page';
import { Fetcher } from 'src/app/utils/Fetcher';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environment';
import { FormDataBuilder } from 'src/app/utils/FormDataBuilder/FormDataBuilder';
import { NotificationService } from '../notification-service/notification.service';

@Injectable()
export class CategoryService {
  private collection: string = 'categories'

  constructor(
    private fetcher: Fetcher,
    private notificationService: NotificationService,
    private router: Router,
    private formDataBuilder: FormDataBuilder
  ) { }

  getPage(queryParams: Params): Observable<HttpResponse<Page<Category>>> {
    const endpoint = this.collection + `?page=${queryParams.page}&size=${queryParams.size}&sort=name`
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Page<Category>>(url)
  }

  create(name: string, image: File) {
    let formData = this.formDataBuilder.generate({name}, [{name: 'image', files: [image]}])
    const endpoint = this.collection + '/create'
    const url = environment.apiUrl + endpoint
    return this.fetcher.post<Category>(url, formData)
  }

  delete(id: string, callback: Function) {
    const endpoint = this.collection + '/delete/' + id
    const url = environment.apiUrl + endpoint
    this.fetcher.delete(url)
      .subscribe(
        () => {
          callback()
          this.notificationService.pop('success', 'Category deleted successfully!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }

  get(id: string) {
    const endpoint = this.collection + '/' +  id
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Category>(url)
  }

  edit(id: string, name: string, image: File) {
    let data = new FormData()
    data.append('name', name)
    data.append('image', image)

    const endpoint = this.collection + '/edit/' + id
    const url = environment.apiUrl + endpoint
    this.fetcher.put(url, data)
      .subscribe(
        category => {
          this.router.navigateByUrl('/categories')
          this.notificationService.pop('success', 'Brand updated successuflly!')
        },
        error => this.notificationService.pop('error', error.error)
      )
  }
}
