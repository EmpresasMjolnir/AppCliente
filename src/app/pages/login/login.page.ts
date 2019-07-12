import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //private form = {
    //email:"",
   // senha:""
  //}
  //constructor(private prov: LogarService, private router: Router){}

  //ngOnInit() {
  //}

  //efetuarLogin(){
    //this.prov.getLogar(this.form.email).subscribe(
      //(result:any) => {
        //if((this.form.email == result[0].email) && (this.form.senha == result[0].senha)){
         // this.router.navigateByUrl('/home');
        //}
     // },
      //(error:any) => {
       // console.log(error)
     // }
    //)
 // }

 protected email: string = "";
  protected senha: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    private googlePlus: GooglePlus,
    private device: Device
  ) { }

  ngOnInit() {
    console.log(this.afAuth);
  }

  onSubmit(form) {
    this.login();
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha).then(
      res => {
        this.router.navigate(["/"]);
        console.log(res);
      },
      err => {
        this.presentAlert("Erro!", "Usuario não encontrado!");
        console.log(err);
      }
    );

  }

  loginGoogle() {
    console.log(this.device.platform);

    if (this.device.platform == "browser")
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    else
      this.loginGoogleMobile();

    if (this.afAuth.user) {
      this.router.navigate(['/']);
    }

  }

  loginGoogleMobile() {
    this.googlePlus.login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  //Alertas--------------------------------
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }
}
