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




  constructor(private actividadService: ActividadService) { }

  ngOnInit() {
  }


  crearActividad(): void {
    // Verificar que todos los campos estén completos (esto es opcional, pero recomendable)
    if (this.nombreActividad && this.descripcionActividad && this.multimediaActividad && this.ubicacionActividad && this.fechaActividad) {
      const nuevaActividad = new Actividad(

      );

      // Llamamos al servicio para guardar la nueva actividad
      this.actividadService.crearActividad(nuevaActividad).subscribe(
        (response) => {
          console.log('Actividad creada con éxito:', response);
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
