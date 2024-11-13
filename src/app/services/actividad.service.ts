import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actividad} from "../model/Actividad";
import any = jasmine.any;
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(httpCliente: HttpClient) { }


    getActividades(): Observable<Actividad[]>{
      return [];
    }
}
