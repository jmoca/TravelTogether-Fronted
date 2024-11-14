import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";
import {Usuario} from "../model/Usuario";
import {UsuarioService} from "../services/Usuario.service";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-perfil-user',
    templateUrl: './perfil-user.component.html',
    styleUrls: ['./perfil-user.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FooterComponent,
        RouterLink,
        CommonModule
    ]
})
export class PerfilUserComponent  implements OnInit {
    private id_usuario: number = 1;
    protected amigos: Usuario[] = [];
    constructor(private usuario:UsuarioService) { }

    ngOnInit() {
        this.cargarAmigos();
    }


    cargarAmigos(): void{
        this.usuario.getAmigos(this.id_usuario).subscribe({
            next: (data) => {
                console.info(data);
            },
            error: (error) => console.error('Erro',error),
            complete: () => console.log('Petición completada')
        });
    }

}
