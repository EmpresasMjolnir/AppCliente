import { Component, OnInit } from '@angular/core';
import { Dados2Service } from 'src/app/services/dados2.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.page.html',
  styleUrls: ['./vitrine.page.scss'],
})
export class VitrinePage implements OnInit {

  produtos:any = [];

  constructor(private prov: Dados2Service) { }

  ngOnInit() {
    this.produto();
  }
  produto(){
    this.prov.getVitrine().subscribe(
      
      data=>{ 
      let resposta = (data as any)._body;
      resposta = JSON.parse(resposta);
      this.produtos = resposta;
    },
      error=>{
        console.log(error);
      }
    ).add();
  }

}
