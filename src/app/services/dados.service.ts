
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private bd: AngularFireDatabase) { }

    save(cliente: Cliente, id:string) {
      return this.bd.object("cliente/" +id).set(cliente);
    }
}