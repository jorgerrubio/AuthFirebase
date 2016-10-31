import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {EstadoTarea} from "../model/estado-tarea";

@Injectable()
export class LovProvider {

  getTareaStates(): Array<EstadoTarea>{
    return [EstadoTarea.NUEVA, EstadoTarea.EJECUTANDO, EstadoTarea.FINALIZADA];
  }

}
