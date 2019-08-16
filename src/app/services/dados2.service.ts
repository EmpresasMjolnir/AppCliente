import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Produto } from './../model/produto';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class Dados2Service {

  private URL_API:string = "http://10.69.136.129:3000";

  constructor(//private http: Http
    private bd: AngularFireDatabase
    ) { }


  //getVitrine(){
  //  return this.http.get(`${this.URL_API}/cadastroProduto`)};

getAll() {
  return this.bd.list<Produto>("produto").snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
}
}
