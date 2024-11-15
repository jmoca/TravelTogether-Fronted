import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {Usuario} from "../model/Usuario";
import {GrupoService} from "../services/Grupo.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Grupo} from "../model/Grupo";

@Component({
    selector: 'app-add-users-group',
    templateUrl: './add-users-group.component.html',
    styleUrls: ['./add-users-group.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})
export class AddUsersGroupComponent  implements OnInit {
  // signo ! asegura sea inicializada
  protected id_usuario!: number;
  private id_grupo: number = 1;


  constructor(private  grupoService: GrupoService, private grupoServicio: GrupoService) { }

  ngOnInit() {
    this.nuevoParticipante();

  }


  nuevoParticipante(): void {
    if (this.id_usuario != null && this.id_usuario > 0) {
      this.grupoService.nuevoParticipante(this.id_grupo, this.id_usuario).subscribe(
        (usuario: Usuario) => {
          console.info("Participante agregado al grupo", usuario);
          this.recargarPagina();
        },
        (error) => {
          console.error("Error al agregar el participante", error);
        }
      );
    } else {
      console.error("El ID del participante no es válido", this.id_usuario);
    }
  }
  recargarPagina(): void {
    window.location.reload();
  }

}
