import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

import {GrupoService} from "../services/Grupo.service";
import {Grupo} from "../model/Grupo";

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html',
  styleUrls: ['./settings-group.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FooterComponent,
    RouterLink,
    CommonModule
  ]
})
export class SettingsGroupComponent implements OnInit {
  usuarios: { id: number | undefined; nombre: string }[] = [];
  private id_grupo: number = 1;

  constructor(private grupoServicio: GrupoService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.grupoServicio.getParticipantes(this.id_grupo).subscribe({
      next: (grupo: Grupo) => {
        if (grupo.usuarios) {
          // Aquí almacenamos tanto el nombre como el id del usuario en un objeto
          this.usuarios = grupo.usuarios.map(usuario => ({
            id: usuario.id,     // Asegúrate de que 'id' sea un atributo del usuario
            nombre: usuario.nombre || 'Nombre no disponible'  // Agregar un valor por defecto
          }));
          console.info(this.usuarios); // Verificamos los datos que hemos almacenado
        } else {
          this.usuarios = [];
        }
      },
      error: (error) => console.error('Error', error),
      complete: () => console.log('Petición completada')
    });
  }




  count = 3;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  eliminarParticipante(id_usuario: number | undefined): void {
    if (id_usuario !== undefined) {  // Comprobamos si id_usuario no es undefined
      this.grupoServicio.eliminarParticipante(this.id_grupo, id_usuario).subscribe(
        (usuario) => {
          console.log("Participante eliminado:", usuario);
          // Después de eliminar, actualiza la lista de usuarios
          this.cargarUsuarios();
        },
        (error) => {
          console.error("Error al eliminar al participante", error);
        }
      );
    } else {
      console.error("El ID del usuario es inválido");
    }
  }

}
