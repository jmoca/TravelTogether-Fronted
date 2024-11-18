import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actividad} from "../model/Actividad";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private httpClient: HttpClient) { }


    getActividades(id_grupo:number): Observable<Actividad[]>{
      return this.httpClient.get<any>(`/api/viaje/actividades?id_grupo=${id_grupo}`);
    }
    crearActividad(id_usuario: number, actividad:Actividad): Observable<Actividad>{
        return this.httpClient.post<Actividad>(`/api/viaje/actividades/nueva?id_usuario=${id_usuario}`,actividad);
    }
    votarActividad(id_actividad:number): Observable<Actividad>{
        return this.httpClient.put<Actividad>(`/api/viaje/actividades/votar?id_actividad=${id_actividad}`,null);
    }

    votosTotales(id_actividad:number): Observable<number>{
        return this.httpClient.get<number>(`/api/viaje/actividades/votos?id_actividad=${id_actividad}`);
    }

}
