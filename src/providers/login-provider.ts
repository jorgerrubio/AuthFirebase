import {Injectable, NgZone, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Credential} from "../model/credential";
import firebase from 'firebase';

@Injectable()
export class LoginProvider {

	currentUser: any;
	isAuth: boolean;
	loginSuccessEventEmitter: EventEmitter<any>;
	loginErrorEventEmitter: EventEmitter<any>;
	logoutEventEmitter: EventEmitter<any>;

    constructor(public http: Http, public ngZone: NgZone) {
      this.loginSuccessEventEmitter = new EventEmitter();
      this.loginErrorEventEmitter = new EventEmitter();
      this.logoutEventEmitter = new EventEmitter();
      firebase.auth().onAuthStateChanged(usuario => {
        this.callbackStateChange(usuario);
      })
  	}

  	private callbackStateChange(usuario){
      this.ngZone.run(() => {
        if(usuario == null){
          this.currentUser = null;
          this.isAuth = null;
        }else{
          this.currentUser = usuario;
          this.isAuth = true;
        }
      });
    }

    loginWithCredentials(credential: Credential){
      firebase.auth().signInWithEmailAndPassword(credential.email, credential.password)
        .then(resultado => this.callbackSuccessLogin(resultado))
        .catch(error => this.callbackErrorLogin(error));
    }

    loginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(resultado => this.callbackSuccessLogin(resultado))
        .catch(error => this.callbackErrorLogin(error));
    }

  	registrarUsuario(credential: Credential){
    	firebase.auth().createUserWithEmailAndPassword(credential.email, credential.password)
      		.then(resultado => console.log(resultado))
      		.catch(error => console.log(error));
  	}

    private callbackSuccessLogin(response) {
      this.loginSuccessEventEmitter.emit(response.user);
    }

    private callbackErrorLogin(error) {
      this.loginSuccessEventEmitter.emit({code: error.code, message: error.message, email: error.email, credential: error.password});
    }
}
