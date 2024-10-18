import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class NewActivityComponent implements OnInit {
  selectedFile: File | null = null;

  constructor() { }

  ngOnInit() {}

  // Método para manejar la selección de archivo
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Método para subir el archivo
  uploadFile() {
    if (this.selectedFile) {
      // Aquí puedes agregar la lógica para subir el archivo a un servidor o API
      console.log('Archivo seleccionado:', this.selectedFile);
      // Ejemplo de cómo podrías manejar la subida de archivo:
      const formData = new FormData();
      formData.append('file', this.selectedFile);

    }
  }
}
