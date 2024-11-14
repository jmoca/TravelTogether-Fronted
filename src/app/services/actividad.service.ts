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
    crearActividad(actividad:Actividad): Observable<Actividad>{
        return this.httpClient.post<Actividad>(`/api/viaje/actividad`,actividad);
    }
    votarActividad(id_actividad:number): Observable<Actividad>{
        return this.httpClient.put<Actividad>(`/api/viaje/actividad/votar?id_actividad=${id_actividad}`,null);
    }

}
