import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        RouterLink
    ]
})
export class RegistrationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
