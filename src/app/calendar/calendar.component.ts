import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {count} from "rxjs";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    FooterComponent
  ]
})
export class CalendarComponent  implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {}



  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
