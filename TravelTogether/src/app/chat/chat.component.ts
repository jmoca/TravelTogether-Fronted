import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {NavbarGroupComponent} from "../navbar-group/navbar-group.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
    imports: [
        IonicModule,
        NavbarComponent,
        NavbarGroupComponent,
        FooterComponent,
        RouterLink
    ]
})
export class ChatComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
