import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import {addIcons} from "ionicons";

import {add} from "ionicons/icons";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NavbarGroupComponent} from "../navbar-group/navbar-group.component";
import {Actividad} from "../model/Actividad";
import {ActividadService} from "../services/Actividad.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NavbarComponent,
    FooterComponent,
    RouterLink,
    NavbarGroupComponent,
    CommonModule
  ]
})
export class ActivityComponent implements OnInit {

  actividades: Actividad[] = [];
  id_grupo!: number;

  constructor(private actividadService: ActividadService, private route: ActivatedRoute) {
    addIcons({ add });
  }

  ngOnInit() {
    this.cargarActividades();
    this.id_grupo = Number(this.route.snapshot.paramMap.get('id'));
  }

  cargarActividades(): void {
    this.id_grupo = Number(this.route.snapshot.paramMap.get('id'));
    this.actividadService.getActividades(this.id_grupo).subscribe({

      next: (data) => {
        this.actividades = data;
        console.info(data);

        // Por cada actividad, obtener los votos
        this.actividades.forEach((actividad) => {
          if (actividad.id !== undefined) {
            this.todosVotos(actividad); // Pasar la actividad completa
          }
        });
      },
      error: (error) => console.error('Error', error),
      complete: () => console.log('Petición completada')
    });
  }

  todosVotos(actividad: Actividad): void {
    if (actividad.id !== undefined) {
      this.actividadService.votosTotales(actividad.id).subscribe({
        next: (data) => {
          console.info('Votos totales para la actividad ' + actividad.id, data);
          // Asignamos el balanceVotos a la actividad
          if (Array.isArray(data) && data.length > 0) {
            (actividad as any).balanceVotos = (data as any)[0].balanceVotos; // Asignamos el balanceVotos de la respuesta
          }
        },
        error: (error) => console.error('Error al obtener votos para la actividad', error),
        complete: () => console.log('Petición completada')
      });
    }
  }

  votarmasActividad(id_actividad: number, id_usuario: number): void {
    let tipo_voto = true;
    this.actividadService.votarActividad(id_actividad, id_usuario, tipo_voto).subscribe({
      next: (data) => {
        console.log('Voto registrado con éxito:', data);
        // Actualizar la lista de actividades
        this.cargarActividades();
      },
      error: (error) => console.error('Error al votar la actividad:', error),
      complete: () => console.log('Petición completada')
    });
  }
  votarmenosActividad(id_actividad: number, id_usuario: number): void {
    let tipo_voto = false;
    this.actividadService.votarActividad(id_actividad, id_usuario, tipo_voto).subscribe({
      next: (data) => {
        console.log('Voto registrado con éxito:', data);
        // Actualizar la lista de actividades
        this.cargarActividades();
      },
      error: (error) => console.error('Error al votar la actividad:', error),
      complete: () => console.log('Petición completada')
    });
  }
}
