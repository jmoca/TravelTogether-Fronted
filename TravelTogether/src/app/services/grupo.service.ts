import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Actividad} from "../model/Actividad";
import {Grupo} from "../model/Grupo";
import {Usuario} from "../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class GrupoService {



  constructor(private httpClient: HttpClient) { }

    getGrupos(id_usuario:number): Observable<Grupo[]>{
        return this.httpClient.get<Grupo[]>(`/api/viajes?id_usuario=${id_usuario}`);
    }
  nuevoParticipante(id_grupo: number, id_usuario: number): Observable<Usuario> {
    return this.httpClient.post<Usuario>(
      `/api/viaje/participante/nuevo?id_usuario=${id_usuario}&id_grupo=${id_grupo}`,
      {}
    );
  }

  getParticipantes(id_grupo:number): Observable<Grupo>{
        return this.httpClient.get<Grupo>(`/api/viaje/participantes?id_grupo=${id_grupo}`);
    }
  eliminarParticipante(id_grupo: number, id_usuario: number): Observable<Usuario> {
    // Creamos un objeto que contiene los datos que el servidor espera en el cuerpo
    const body = {
      id_grupo: id_grupo,
      id_usuario: id_usuario
    };

    // Usamos el método DELETE con el cuerpo (body) en lugar de pasar los parámetros en la URL
    return this.httpClient.delete<Usuario>('/api/viaje/participante/eliminar', {
      body: body // El objeto que contiene los parámetros
    });
  }

  crearGrupo(nuevoGrupo: Grupo): Observable<Grupo>{
        nuevoGrupo.id = 6;
        return this.httpClient.post<Grupo>(`/api/viaje/nuevo`,nuevoGrupo);
    }

}
