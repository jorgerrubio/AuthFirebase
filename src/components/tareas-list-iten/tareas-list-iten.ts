import {Component, Input} from '@angular/core';
import {Tarea} from "../../model/tarea";

@Component({
  selector: 'tareas-list-iten',
  templateUrl: 'tareas-list-iten.html'
})
export class TareasListIten {

  @Input() tarea: Tarea;

}
