import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }



    getAmigos(id_usuario:number): Observable<Usuario[]>{ // Debes recibir un array de usuarios
        return this.httpClient.get<Usuario[]>(`/api/amigos?id_usuario=${id_usuario}`);
    }

}
