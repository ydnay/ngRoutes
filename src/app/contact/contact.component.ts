import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact',
  template: `
    <h3>
      This is the page for the contact: {{ contactId }}
    </h3>
    <a [routerLink]="['/']"> Back to list </a>
  `
})
export class ContactComponent implements OnInit {
  contactId: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.contactId = Number(params['id']));
  }
}
