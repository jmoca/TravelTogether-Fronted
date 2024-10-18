import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-perfil-user',
    templateUrl: './perfil-user.component.html',
    styleUrls: ['./perfil-user.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FooterComponent
    ]
})
export class PerfilUserComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
