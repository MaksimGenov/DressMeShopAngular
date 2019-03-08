import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Fetcher {

  constructor(private http: HttpClient) { }

  post<T>(url: string, data: Object, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, data, {headers})
  }

  get<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(url, { observe: 'response'})
  }

  put<T>(url: string, data: Object): Observable<T> {
    return this.http.put<T>(url, data)
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url)
  }
}