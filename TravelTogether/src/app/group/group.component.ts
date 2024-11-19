import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterLink, RouterModule} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {CommonModule} from "@angular/common";
import {Grupo} from "../model/Grupo";
import {GrupoService} from "../services/Grupo.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  standalone: true,
    imports: [
        IonicModule,
        NavbarComponent,
        RouterLink,
        FooterComponent,
        RouterModule,
        CommonModule
    ]
})
export class GroupComponent  implements OnInit {

    grupos: Grupo[] = [];
    private id_usuario: number = 1;

  constructor(private grupoService: GrupoService) { }

    ngOnInit() {
    this.cargarGrupos();
  }
    cargarGrupos(): void{
        this.grupoService.getGrupos(this.id_usuario).subscribe({
            next: (data) => {
                this.grupos = data;
                console.info(data);
            },
            error: (error) => console.error('Erro',error),
            complete: () => console.log('Petición completada')
        });


}
}
