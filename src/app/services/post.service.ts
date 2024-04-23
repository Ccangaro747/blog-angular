// Importa la clase Post desde el archivo post ubicado en el directorio models.
import { Post } from './../models/post';

// Importa el decorador Injectable desde el módulo @angular/core.
// Injectable se utiliza para marcar una clase como un proveedor de servicios.
import { Injectable } from '@angular/core';

// Importa las clases HttpClient y HttpHeaders desde el módulo @angular/common/http.
// HttpClient se utiliza para realizar solicitudes HTTP y HttpHeaders para configurar cabeceras HTTP.
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importa la clase Observable desde la librería rxjs.
// Observable se utiliza para manejar flujos de datos asíncronos.
import { Observable } from 'rxjs';

// Importa el objeto global desde el archivo global ubicado en el directorio raíz.
// global probablemente contiene valores globales utilizados en la aplicación.
import { global } from './global';


@Injectable()
export class PostService{
  public url: string;

  constructor(
    private _http: HttpClient
  ){
    this.url = global.url;
  }

  pruebas(){
    return "Soy el servicio de entradas";
  }
}