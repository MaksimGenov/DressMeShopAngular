import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpResponse } from '@angular/common/http';
import { Size } from 'src/app/models/Size';
import { Fetcher } from 'src/app/utils/Fetcher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  private collection: string = "sizes"

  constructor(private fetcher: Fetcher) { }

  getAll(): Observable<HttpResponse<Size[]>> {
    const endpoint: string = this.collection + "/all"
    const url: string = environment.apiUrl + endpoint

    return this.fetcher.get<Size[]>(url)
  }

  create(size: Size): Observable<Size> {
    const endpoint: string = this.collection + "/create"
    const url: string = environment.apiUrl + endpoint

    return this.fetcher.post<Size>(url, size)
  } 
}
