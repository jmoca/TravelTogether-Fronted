import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
@Component({
    selector: 'app-new-group',
    templateUrl: './new-group.component.html',
    styleUrls: ['./new-group.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        RouterModule,
        CommonModule
    ]
})
export class NewGroupComponent  implements OnInit {
    selectedFile: File | null = null;
  constructor() { }

  ngOnInit() {}


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
