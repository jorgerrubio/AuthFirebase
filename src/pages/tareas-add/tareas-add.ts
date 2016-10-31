import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Tarea} from "../../model/tarea";
import {LovProvider} from "../../providers/lov-provider";
import {TareasProvider} from "../../providers/tareas-provider";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'page-tareas-add',
  templateUrl: 'tareas-add.html'
})
export class TareasAdd {

  tarea: Tarea;
  tareaForm;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder,
              public tareasProvider: TareasProvider,
              public lovProvider: LovProvider) {
    this.inicio();
  }

  ionViewDidLoad() {
    this.tarea = this.navParams.get('tarea');
    if(!this.tarea){
      this.tarea = new Tarea();
    }
  }

  private inicio(){
    this.tareaForm = this.formBuilder.group({
      'titulo' : ['', Validators.required],
      'descripcion' : ['', Validators.required]
    });
  }

  addTarea(){
    this.tareasProvider.add(this.tarea);
    this.viewCtrl.dismiss();
  }

}
