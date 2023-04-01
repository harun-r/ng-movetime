import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = 'b08827e5775601663b9da08181e2cb24';

  getSearch(data:any):Observable<any>{
    return this.http.get(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${data.movieName}`)
  }
}
