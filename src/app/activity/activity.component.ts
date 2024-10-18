import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {RouterLink} from "@angular/router";
import {NavbarGroupComponent} from "../navbar-group/navbar-group.component";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NavbarComponent,
    FooterComponent,
    RouterLink,
    NavbarGroupComponent
  ]
})
export class ActivityComponent implements OnInit {

  // Arreglo de contadores para las tarjetas
  counters: number[] = [0, 0, 0];

  constructor() {
    addIcons({ add });

  }

  ngOnInit() {}
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }


}
