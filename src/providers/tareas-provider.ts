import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Tarea} from "../model/tarea";
import {LoginProvider} from "./login-provider";
import firebase from 'firebase';

@Injectable()
export class TareasProvider {

  referencia;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.inicio();
  }

  private inicio(){
    let uid: any;
    uid = (window.localStorage.getItem('isLogged') != null) ? window.localStorage.getItem('userId') : this.loginProvider.currentUser.uid;
    
    this.referencia = firebase.database().ref(uid + '/tareas/');
  }

  add(tarea: Tarea){
    let refKey: any;
    if(tarea.keyReference != undefined){
      refKey = tarea.keyReference;
    }else{
      refKey = this.referencia.push().key;
      tarea.keyReference = refKey;
    }

    this.referencia.child(refKey).update(tarea);
  }

  delete(tarea: Tarea): any{
    return this.referencia.child(tarea.keyReference).remove();
  }
}
