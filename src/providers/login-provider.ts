import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Credential} from "../model/credential";
import firebase from 'firebase';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  registrarUsuario(credential: Credential){
    firebase.auth().createUserWithEmailAndPassword(credential.email, credential.password)
      .then(resultado => console.log(resultado))
      .catch(error => console.log(error))
  }
}
