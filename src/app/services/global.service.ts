import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiURL = 'https://api.chucknorris.io/jokes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private http: HttpClient) {}
  

  getJokeRandom(): Observable<any> {
    return this.http.get(this.apiURL + '/random');
  }

  getCategories(): Observable<any> {
    return this.http
    .get(this.apiURL + '/categories');
  }
  getByCategory(category:string): Observable<any> {
    return this.http
    .get(this.apiURL + '/search?query='+ category );
  }


}