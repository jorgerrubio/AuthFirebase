import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import {LoginProvider} from "../providers/login-provider";
import {Registrarse} from "../pages/registrarse/registrarse";
import firebase from 'firebase';
import {TareasList} from "../pages/tareas-list/tareas-list";
import {TareasAdd} from "../pages/tareas-add/tareas-add";
import {TareasListIten} from "../components/tareas-list-iten/tareas-list-iten";
import {TareasProvider} from "../providers/tareas-provider";
import {LovProvider} from "../providers/lov-provider";

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
    Login,
    Registrarse,
    TareasList,
    TareasListIten,
    TareasAdd
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Registrarse,
    TareasList,
    TareasListIten,
    TareasAdd
  ],
  providers: [LoginProvider, TareasProvider, LovProvider]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
