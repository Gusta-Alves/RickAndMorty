import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhrase } from '../outdoor/models/phrase.interface';

@Injectable({
  providedIn: 'root'
})
export class OutdoorService {

  constructor(private httpClient: HttpClient) { }

  onGetPhrase(): Observable<IPhrase>{
    return this.httpClient.get<IPhrase>('https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random')
  }
}
