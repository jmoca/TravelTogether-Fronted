import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import {RouterLink} from "@angular/router";
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
  protected id_grupo: number = 1;




  constructor(private actividadService: ActividadService) { }

  ngOnInit() {
  }


  crearActividad(): void {
    // Verificar que todos los campos estén completos (esto es opcional, pero recomendable)
    if (this.nombreActividad && this.descripcionActividad && this.multimediaActividad && this.ubicacionActividad && this.fechaActividad) {
      const nuevaActividad = new Actividad();
      nuevaActividad.nombre = this.nombreActividad;
      nuevaActividad.descripcion = this.descripcionActividad;
      nuevaActividad.multimedia = this.multimediaActividad;
      nuevaActividad.lugar = this.ubicacionActividad;
      nuevaActividad.fecha = this.fechaActividad;
      nuevaActividad.id_grupo = this.id_grupo;
      console.log('Datos de la actividad a crear:', nuevaActividad);


      // Llamamos al servicio para guardar la nueva actividad
      this.actividadService.crearActividad(this.id_usuario, nuevaActividad).subscribe(
        (data) => {
          console.log('Actividad creada con éxito:', data);
          console.info(data);
          // Aquí puedes hacer algo después de crear la actividad, como redirigir a otra página o limpiar el formulario
        },
        (error) => {
          console.error('Error al crear la actividad:', error);
          // Puedes manejar el error (por ejemplo, mostrar un mensaje al usuario)
        }
      );
    } else {
      console.error('Todos los campos deben estar completos');
    }
  }

}
