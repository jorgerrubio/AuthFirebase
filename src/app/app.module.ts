import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import {LoginProvider} from "../providers/login-provider";
import {Registrarse} from "../pages/registrarse/registrarse";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5rM8cR47spqF9wdWPAYX9jdfLM_J3Cx4",
  authDomain: "authfirebase-29329.firebaseapp.com",
  databaseURL: "https://authfirebase-29329.firebaseio.com",
  storageBucket: "authfirebase-29329.appspot.com",
  messagingSenderId: "679396022594"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Registrarse
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Registrarse
  ],
  providers: [LoginProvider]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
