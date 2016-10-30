import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Registrarse} from "../registrarse/registrarse";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  gotoToRegitrarse(){
    this.navCtrl.push(Registrarse);
  }

}
