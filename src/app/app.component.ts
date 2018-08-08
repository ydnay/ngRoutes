import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <ul>
    <li> <a [routerLink]="['home']"> Home </a> </li>
    <li> <a [routerLink]="['about']"> About </a> </li>
    <li> <a [routerLink]="['']"> Contacts </a> </li>
    </ul>
  </nav>
  <h1> {{ title }} </h1>
  <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Routing';
}
