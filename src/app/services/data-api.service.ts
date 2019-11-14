import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getDatos(){
    const url_api = "https://autem.sytes.net/servidor/followers/franciscleylim";
    return this.http.get(url_api);
  }
}
