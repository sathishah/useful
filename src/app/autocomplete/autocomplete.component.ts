import { Component, OnInit } from '@angular/core';

class Contact {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  openDrop: boolean = false;
  selectedName: any;
  selectedItem: Contact;
  contacts: Contact[] = [];
  filterContacts: Contact[] = []
  constructor() { }

  ngOnInit(): void {

    for (let index = 0; index < 10; index++) {
      const contact = new Contact();
      contact.avatar = 'avatar ' + index ;
      contact.name = 'name ' + index;
      contact.phone = 'phone ' + index;
      contact.email = 'email ' + index;
      contact.address = 'addres ' + index;
      this.contacts.push(contact);
    }
    this.filterContacts = this.contacts;
  }

  onOpenDrop(state: boolean) {
    this.openDrop = state;
  }

  onSelectItem(contact: Contact) {
    this.selectedItem = contact;
    this.selectedName = contact?.name;
    this.onOpenDrop(false);
  }

  onSearchContact(value: string) {
    value = (value || '').toLowerCase();

    this.filterContacts = this.contacts.filter(c => {
      const name = c.name.toLowerCase();
      const email = c.email.toLowerCase();
      return name.includes(value) || email.includes(value);
    });

  }

}
