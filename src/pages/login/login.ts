import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Registrarse} from "../registrarse/registrarse";
import {LoginProvider} from "../../providers/login-provider";
import {Credential} from "../../model/credential";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  credential: Credential;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {
    this.credential = new Credential;
  }

  ionViewDidLoad() {
    this.loginProvider.loginSuccessEventEmitter.subscribe(
      user => console.log(user)
    );

    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    );
  }

  loginWithCredential(){
    this.loginProvider.loginWithCredentials(this.credential);
  }

  loginWithGoogle(){
    this.loginProvider.loginWithGoogle();
  }

  gotoToRegitrarse(){
    this.navCtrl.push(Registrarse);
  }
}
