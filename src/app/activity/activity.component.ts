import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {RouterLink} from "@angular/router";
import {NavbarGroupComponent} from "../navbar-group/navbar-group.component";
import {Actividad} from "../model/Actividad";
import {ActividadService} from "../services/Actividad.service";
import {CommonModule} from "@angular/common";

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
    NavbarGroupComponent,
      CommonModule
  ]
})
export class ActivityComponent implements OnInit {

  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) {
    addIcons({ add });

  }

    ngOnInit() {
        this.actividadService.getActividades().subscribe({
            next: (data) => {
                this.actividades = data;
                console.info(data);
            },
            error: (error) => console.error('Erro',error),
            complete: () => console.log('Petición completada')
        });
    }

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }


}
