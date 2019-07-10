import { Component, OnInit } from '@angular/core';
import { LogarService } from 'src/app/services/logar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private form = {
    email:"",
    senha:""
  }
  constructor(private prov: LogarService, private router: Router){}

  ngOnInit() {
  }

  efetuarLogin(){
    this.prov.getLogar(this.form.email).subscribe(
      (result:any) => {
        if((this.form.email == result[0].email) && (this.form.senha == result[0].senha)){
          this.router.navigateByUrl('/home');
        }
      },
      (error:any) => {
        console.log(error)
      }
    )
  }
}
