import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  public usuario : String = "";
  public pagina : String = "";
  constructor(private http: HttpClient) { }

  getDatos(){
    const url_api = "https://autem.sytes.net/servidor/followers/"+this.usuario+"/-"+this.pagina;
    return this.http.get(url_api);
  }
}
