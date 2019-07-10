import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { DadosService } from 'src/app/services/dados.service';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private cliente:Cliente = new Cliente;

  constructor(private dados: DadosService, private alertController: AlertController,  public afAuth: AngularFireAuth,
    public router: Router) { }

  ngOnInit() {
    this.cliente = new Cliente;
    //await this.platform.ready();
  }

  onSubmit(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(this.cliente.email, this.cliente.senha)
      .then(
        res => {
          this.cliente.email = null;
          this.cliente.senha = null;
          this.dados.save(this.cliente, res.user.uid);
          console.log("Cadastrado");
          this.presentAlert("Aviso!", "Usuário cadastrada.");
          this.router.navigate(['/']);
        }
        ,
        err => {
          console.log("Epá! Não foi cadastrado!" + err);
          this.presentAlert("Erro!", "Epá! Não foi cadastrado!");
        }
      ).catch(
        erros => {
          console.log("Erro ao conectar no sistema! " + erros);
          this.presentAlert("Erro!", "Erro ao conectar no sistema!");
        }
      )
  }

  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      // subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }

  //async registraCadastro(){
    //await this.dados.addDados(this.cliente).subscribe(
     // result=>{
       //   console.log('gravado com sucesso');
     // },
      //  error => {
      //    console.error();
     // }
  //  )
 // }
}