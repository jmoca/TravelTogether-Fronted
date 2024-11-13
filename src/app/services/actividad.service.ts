import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actividad} from "../model/Actividad";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private httpClient: HttpClient) { }


    getActividades(): Observable<Actividad[]>{
      return this.httpClient.get<any>('/api/actividades/all');
    }
}
