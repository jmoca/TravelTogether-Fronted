import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Usuario} from "../model/Usuario";
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
  usuarios: (string | undefined)[] = [];
  private id_grupo: number = 1;

  constructor(private grupoServicio: GrupoService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.grupoServicio.getParticipantes(this.id_grupo).subscribe({
      next: (grupo: Grupo) => {

        if (grupo.usuarios) {
          // Extraer los nombres de los usuarios (solo si existen)
          this.usuarios = grupo.usuarios.map(usuario => usuario.nombre);
          console.info(this.usuarios); // Esto ahora debería ser un arreglo de nombres
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
}
