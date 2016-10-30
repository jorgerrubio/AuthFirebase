import {Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import {Credential} from "../../model/credential";

@Component({
    selector: 'page-registrarse',
    templateUrl: 'registrarse.html'
})
export class Registrarse {

    public credential: Credential;
    public togglePass: string = 'password';

    constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {
        this.credential = new Credential;
        console.log(this.credential);
    }

    ionViewDidLoad() {
        console.log('Hello Registrarse Page');
    }

    toRegistro(){
    if(this.credential.email != '' && this.credential.password != '') {
        // console.log(this.credential);
        this.loginProvider.registrarUsuario(this.credential)
    }
    }

    toggleType(){
        this.togglePass = (this.togglePass == 'text') ? 'password' : 'text';
    }

}
