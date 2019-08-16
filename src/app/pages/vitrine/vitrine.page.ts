import { Component, OnInit } from '@angular/core';
import { Dados2Service } from 'src/app/services/dados2.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.page.html',
  styleUrls: ['./vitrine.page.scss'],
})
export class VitrinePage implements OnInit {

  protected produto$: any;
  constructor(private Dados2Service: Dados2Service) { }

  ngOnInit() {
 this.produto$ = this.Dados2Service.getAll();
    
  }

}