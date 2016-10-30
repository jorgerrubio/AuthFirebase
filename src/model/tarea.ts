import {EstadoTarea} from "./estado-tarea";
/**
 * Created by Jorge Rubio on 29/10/2016.
 */
export class Tarea{
  id: number;
  titulo: string;
  descripcion: string;
  state: EstadoTarea;
}
