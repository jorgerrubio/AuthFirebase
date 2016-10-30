import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Registrarse} from "../registrarse/registrarse";
import {LoginProvider} from "../../providers/login-provider";
import {Credential} from "../../model/credential";
import {HomePage} from '../home/home';


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
      user => this.navCtrl.setRoot(HomePage)
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

  loginWithFacebook(){
    this.loginProvider.loginWithFacebook();
  }

  logout(){
    this.loginProvider.logout();
  }

  gotoToRegitrarse(){
    this.navCtrl.push(Registrarse);
  }
}
