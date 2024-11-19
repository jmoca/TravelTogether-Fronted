import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ActividadService} from "../services/Actividad.service";
import {FormsModule} from "@angular/forms";
import {Actividad} from "../model/Actividad";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})
export class NewActivityComponent implements OnInit {
  protected nombreActividad!: string;
  protected descripcionActividad!: string;
  protected multimediaActividad!: string;
  protected ubicacionActividad!: string;
  protected fechaActividad!: string;
  private id_usuario: number = 1;
  id_grupo!: number;


  constructor(private actividadService: ActividadService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id_grupo = Number(this.route.snapshot.paramMap.get('id'));
  }


  crearActividad(): void {
    // Verificar que todos los campos estén completos (esto es opcional, pero recomendable)
    if (this.nombreActividad && this.descripcionActividad && this.multimediaActividad && this.ubicacionActividad && this.fechaActividad) {
      const nuevaActividad = new Actividad();
      this.id_grupo = Number(this.route.snapshot.paramMap.get('id'));
      nuevaActividad.id_grupo = this.id_grupo;
      nuevaActividad.nombre = this.nombreActividad;
      nuevaActividad.descripcion = this.descripcionActividad;
      nuevaActividad.multimedia = this.multimediaActividad;
      nuevaActividad.lugar = this.ubicacionActividad;
      nuevaActividad.fecha = this.fechaActividad;

      console.log('Datos de la actividad a crear:', nuevaActividad);


      // Llamamos al servicio para guardar la nueva actividad
      this.actividadService.crearActividad(this.id_usuario,this.id_grupo, nuevaActividad).subscribe({
        next: (nuevaActividad) => {
          console.log('Actividad creada con éxito:', nuevaActividad);
          console.info(nuevaActividad);

          // Aquí puedes hacer algo después de crear la actividad, como redirigir a otra página o limpiar el formulario
        },
        error: (error) => console.error('Erro', error),
        complete: () => console.log('Petición completada')

      });
    } else {
      console.error('Todos los campos deben estar completos');
    }
  }

}



