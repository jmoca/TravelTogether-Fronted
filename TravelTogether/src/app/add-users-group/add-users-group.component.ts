import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-add-users-group',
    templateUrl: './add-users-group.component.html',
    styleUrls: ['./add-users-group.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        RouterLink
    ]
})
export class AddUsersGroupComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
