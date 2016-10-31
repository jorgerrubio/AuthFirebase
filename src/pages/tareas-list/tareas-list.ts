import {Component, NgZone} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Tarea} from "../../model/tarea";
import {TareasProvider} from "../../providers/tareas-provider";
import {TareasAdd} from "../tareas-add/tareas-add";

@Component({
  selector: 'page-tareas-list',
  templateUrl: 'tareas-list.html'
})
export class TareasList {

  tareas: Array<Tarea>;

  constructor(public navCtrl: NavController, public tareasProvider: TareasProvider, public toastCtrl: ToastController, public ngZone: NgZone) {}

  ionViewDidLoad() {
    /*
     * metodos en db firebase
     * value - escucha todos los cambios por referencia
     * child_added - escucha cuando de añade una fila
     * child_changed - escucha cuando se cambia un fila
     * child_removed - escucha cuando se borra una fila
     * child_moved - escucha cambio de prioridad en una fila
     */
    this.tareasProvider.referencia.on('child_removed', (snapshot) => {
      let tareaBorrada = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarea ' + tareaBorrada.titulo + 'borrada!',
        duration: 3000
      }).present();
    });

    this.tareasProvider.referencia.on('value', (snapshot) => {
      this.ngZone.run(() => {
        let tempArray = new Array();
        snapshot.forEach(ele => {
          let e = ele.val();
          tempArray.push(e);
        });
        this.tareas = tempArray;
      });
    });
  }

  addTarea(){
    this.navCtrl.push(TareasAdd, {'tarea': new Tarea()});
  }

  updateTarea(tarea: Tarea){
    this.navCtrl.push(TareasAdd, {'tarea': tarea});
  }

  deleteTarea(tarea: Tarea){
    this.tareasProvider.delete(tarea)
      .then(
        success => console.log('tarea borrada')
      )
      .catch(error => console.log('no se ha podido borrar la tarea'));
  }
}
