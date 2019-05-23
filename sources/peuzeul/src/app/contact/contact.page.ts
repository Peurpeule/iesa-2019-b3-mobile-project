import { Component } from '@angular/core';
import { GamificationBadgeService } from '../gamification-badge.service';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  providers: [Contacts],
})
export class ContactPage {

  constructor(
      private badge: GamificationBadgeService,
      private contacts: Contacts,
  ) {
    this.createContact();
  }

  contact: Contact = this.contacts.create();
  createContact() {
    this.contact.name = new ContactName(null, 'Smith', 'John');
    this.contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    this.contact.save().then(
        () => console.log('Contact saved!', this.contact),
        (error: any) => console.error('Error saving contact.', error)
    );
  }

  ownbadge() {
    this.badge.reward[1].owned = true;
  }

}
