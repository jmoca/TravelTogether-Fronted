import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ActivatedRoute, RouterLink} from "@angular/router";

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
  id_grupo!: number;
  constructor(private route: ActivatedRoute) {
    this.id_grupo = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {}

}
