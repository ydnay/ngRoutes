import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-overview',
  template: `
    <div>
      <h4> This is the contact overview page </h4>
      <label> Id: {{ contact.id }} </label>
      <label> Name: {{ contact.name }} </label>
      <p *ngIf="optionalParameter"> An optional parameter: {{ optionalParameter }} </p>
    </div>
  `
})
export class ContactOverviewComponent implements OnInit {
  contact: any;
  optionalParameter: string;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.contact = this.contactService.get(+params['id']);
    });

    this.route.queryParams
      .subscribe((queryParams) => {
        this.optionalParameter = queryParams['foo'];
    });
  }
}