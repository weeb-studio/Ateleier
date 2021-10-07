import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  items: any = [];
  voir: boolean = false;
  user: any;
  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  usersDetails(uid: string) {
    this.voir = true;
    this.userServices.getOneUser(uid).subscribe((res) => {
      console.log(res);
      this.user = res;
    });
  }
  getUsers() {
    this.userServices.getTypeUsers('user').subscribe((res) => {
      console.log(res);
      this.items = res;
    });
  }
}
