import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class Dados2Service {

  private URL_API:string = "http://10.69.136.129:3000";

  constructor(private http: Http) { }


  getVitrine(){
    return this.http.get(`${this.URL_API}/cadastroProduto`)};

}