import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = 'b08827e5775601663b9da08181e2cb24';
  
  homeSlider():Observable<any>{
    return this.http.get(`${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}`)
  }
}
