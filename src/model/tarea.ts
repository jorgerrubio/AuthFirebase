import {EstadoTarea} from "./estado-tarea";

export class Tarea{
  keyReference: string; // codigo de refencia en db firebase
  titulo: string;
  descripcion?: string;
  state: EstadoTarea;

  constructor(id?: number, titulo?: string, descripcion?: string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.state = EstadoTarea.NUEVA;
  }
}
