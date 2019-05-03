import { Component, OnInit } from '@angular/core';
import {Contact, ContactField, ContactName, Contacts} from "@ionic-native/contacts/ngx";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public contact:Contact,public contactField:ContactField,public contacts:Contacts,public contactName:ContactName){

  }

  allContacts;

  GetContact(){
    this.contact.find(['displayName', 'name', 'phoneNumbers', 'emails'])
      .then(data => {
        this.allContacts = data
      });


  }

  ngOnInit() {
  }

}
