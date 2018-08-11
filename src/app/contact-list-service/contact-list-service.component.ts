import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list-service',
  templateUrl: '../contact-list/contact-list.component.html',
  styleUrls: ['../contact-list/contact-list.component.css']
})
export class ContactListServiceComponent implements OnInit {
  contacts: Array<Object> = [];

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  viewDetails(id) {
    this.router.navigate(['contact', id]);
  }

}
