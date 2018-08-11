import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <a [routerLink]="['/']"> Back to list </a>
    <router-outlet></router-outlet>
  `
})
export class ContactComponent implements OnInit {
  contactId: number;
  ngOnInit() { }
}
