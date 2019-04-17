import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/Page';
import { Fetcher } from 'src/app/utils/Fetcher';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environment';
import { FormDataBuilder } from 'src/app/utils/FormDataBuilder/FormDataBuilder';
import { CategoryCreateDto } from 'src/app/models/category/CategoryCreateDto';

@Injectable()
export class CategoryService {
  private collection: string = 'categories'

  constructor(
    private fetcher: Fetcher,
    private formDataBuilder: FormDataBuilder
  ) { }

  getPage(queryParams: Params): Observable<HttpResponse<Page<Category>>> {
    const endpoint = this.collection + `?page=${queryParams.page}&size=${queryParams.size}&sort=name`
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Page<Category>>(url)
  }

  create(category: CategoryCreateDto): Observable<Category> {
    let formData = this.formDataBuilder.generate(category)
    const endpoint = this.collection + '/create'
    const url = environment.apiUrl + endpoint
    return this.fetcher.post<Category>(url, formData)
  }

  delete(id: string) {
    const endpoint = this.collection + '/delete/' + id
    const url = environment.apiUrl + endpoint
    return this.fetcher.delete(url)
  }

  get(id: string) {
    const endpoint = this.collection + '/' +  id
    const url = environment.apiUrl + endpoint
    return this.fetcher.get<Category>(url)
  }

  edit(category:Category) {
    let data = this.formDataBuilder.generate(category)

    const endpoint = this.collection + '/edit'
    const url = environment.apiUrl + endpoint
    return this.fetcher.put(url, data)
  }
}
