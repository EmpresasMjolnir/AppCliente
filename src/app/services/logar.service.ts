import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class LogarService {

  private URL_API:string = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }
 
  getLogar(email){
    return this.http.get(`${this.URL_API}/cadastro?email=${email}`, httpOptions);
  }
}