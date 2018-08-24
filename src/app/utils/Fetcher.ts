import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Fetcher {
  private db_url: string = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  post<T>(collection: string, endpoint: string, data: Object): Observable<T> {
    const url = `${this.db_url}/${collection}/${endpoint}`
    return this.http.post<T>(url, data)
  }

  get<T>(collection: string, endpoint: string): Observable<T> {
    const url = `${this.db_url}/${collection}/${endpoint}`
    return this.http.get<T>(url)
  }

  put<T>(collection: string, endpoint: string, data: Object): Observable<T> {
    const url = `${this.db_url}/${collection}/${endpoint}`
    return this.http.put<T>(url, data)
  }

  delete<T>(collection: string, endpoint: string): Observable<T> {
    const url = `${this.db_url}/${collection}/${endpoint}`
    return this.http.delete<T>(url)
  }
}