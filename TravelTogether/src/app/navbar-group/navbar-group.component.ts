import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-navbar-group',
    templateUrl: './navbar-group.component.html',
    styleUrls: ['./navbar-group.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class NavbarGroupComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
