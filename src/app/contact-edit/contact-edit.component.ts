import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-edit',
  template: `
    <div>
      <h4> This is the edit contact page </h4>
      <label> id: {{ editContact.id }} </label>
      <br>
      <label> name: </label>
      <input type="text" [(ngModel)]="editContact.name" />
      <br>
      <button (click)="save()"> Save </button>
    </div>
  `
})
export class ContactEditComponent implements OnInit {
  originalContact: any;
  editContact: any;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    let paramId = +this.route.snapshot.parent.params['id'];
    this.originalContact = this.contactService.get(paramId);
    this.editContact = {
      id: this.originalContact.id,
      name: this.originalContact.name
    };
  }

  save() {
    this.originalContact = this.contactService.edit(this.editContact);
  }
}