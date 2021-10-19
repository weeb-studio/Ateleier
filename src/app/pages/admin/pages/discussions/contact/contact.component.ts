import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }
  items: any = [];
  getContacts() {
    this.contactService.getContact().subscribe((res: any) => {
      console.log(res);
      this.items = res;
    });
  }

  removeContact(id: String) {
    console.log(id);
    this.contactService.deleteContact(id).subscribe((res) => {
      console.log(res);
      this.getContacts();
    });
  }
}
