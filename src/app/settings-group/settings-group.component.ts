import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Usuario} from "../model/Usuario";
import {GrupoService} from "../services/Grupo.service";
import {UsuarioService} from "../services/Usuario.service";

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
export class SettingsGroupComponent  implements OnInit {
    usuarios: Usuario[] = [];
    private id_grupo: number = 1;
  constructor(private grupoServicio: GrupoService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }


    cargarUsuarios(): void{
        this.grupoServicio.getParticipantes(this.id_grupo).subscribe({
            next: (data) => {
                this.usuarios = data;  // Aquí debes recibir un array de usuarios
                console.info(data);
            },
            error: (error) => console.error('Erro',error),
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
