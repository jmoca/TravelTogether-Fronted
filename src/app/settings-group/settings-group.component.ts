import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html',
  styleUrls: ['./settings-group.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FooterComponent
  ]
})
export class SettingsGroupComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  count = 3;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
