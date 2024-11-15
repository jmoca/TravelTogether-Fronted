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
    nuevoParticipante(id_grupo:number,usuario:Usuario): Observable<Usuario>{
        return this.httpClient.post<Usuario>(`/api/viaje/participante?id_grupo=${id_grupo}`,usuario);
    }
    getParticipantes(id_grupo:number): Observable<Grupo>{
        return this.httpClient.get<Grupo>(`/api/viaje/participantes?id_grupo=${id_grupo}`);
    }
    eliminarParticipante(id_grupo:number,id_usuario:number): Observable<Usuario>{
        return this.httpClient.delete<Usuario>(`/api/viaje/participante?id_grupo=${id_grupo}&id_usuario=${id_usuario}`);
    }
    crearGrupo(grupo:Grupo): Observable<Grupo>{
        return this.httpClient.post<Grupo>(`/api/viaje`,grupo);
    }

}
