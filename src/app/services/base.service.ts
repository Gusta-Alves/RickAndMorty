import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  URL_API: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  onGet<T>(url: string): Observable<T>{
    return this.http.get<T>(`${this.URL_API}/${url}`);
  }
}
