import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
})
export class UtilisateursComponent implements OnInit {
  items: any = [];
  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userServices.getUnvaldUser().subscribe((res) => {
      this.items = res;
      console.log(this.items);
    });
  }

  validate(id: string) {
    this.userServices.validate(id).subscribe((res) => {
      console.log(res);
      this.getAllUser();
    });
  }
}
