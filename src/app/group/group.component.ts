import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  standalone: true,
    imports: [
        IonicModule,
        NavbarComponent,
        RouterLink,
        FooterComponent
    ]
})
export class GroupComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
