import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Registrarse} from "../registrarse/registrarse";
import {LoginProvider} from "../../providers/login-provider";
import {Credential} from "../../model/credential";
import {TareasList} from "../tareas-list/tareas-list";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  credential: Credential;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {}

  ionViewDidLoad() {
    this.credential = new Credential;

    this.loginProvider.loginSuccessEventEmitter.subscribe(
      user => {
        this.navCtrl.setRoot(TareasList);
      }
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
