import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {GrupoService} from "../services/Grupo.service";
import {Grupo} from "../model/Grupo";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-new-group',
    templateUrl: './new-group.component.html',
    styleUrls: ['./new-group.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule
  ]
})
export class NewGroupComponent  implements OnInit {
    grupoNuevo: Grupo = new Grupo();
  constructor(private  grupoService: GrupoService) { }

  ngOnInit() {

    this.grupoNuevo = new Grupo();
  }


  guardarGrupo(){
    this.grupoService.crearGrupo(this.grupoNuevo).subscribe((grupo:Grupo)=>{

      console.log("Grupo creado",grupo);
    });
  }


}
