import { Component, OnInit } from '@angular/core';
import {Contact, ContactField, ContactName, Contacts} from "@ionic-native/contacts";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public contact:Contact,public contactField:ContactField,public contacts:Contacts,public contactName:ContactName){

  }

  GetContact(){
    this.contact.pickContact();
  }

  ngOnInit() {
  }

}
