import { Component, OnInit } from '@angular/core';
import { AtelierService } from 'src/app/services/atelier.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-atelier-admin',
  templateUrl: './atelier-admin.component.html',
  styleUrls: ['./atelier-admin.component.scss'],
})
export class AtelierAdminComponent implements OnInit {
  items: any = [];
  constructor(
    private userServices: UserService,
    private atelierService: AtelierService
  ) {
    this.getAtelier();
  }

  ngOnInit(): void {
    // this.getAllUser();
  }

  getAllUser() {
    this.userServices.getUnvaldUser().subscribe((res) => {
      this.items = res;
      console.log(this.items);
    });
  }

  validate(id: string) {}

  getAtelier() {
    this.atelierService.getAtelier().subscribe((res: any) => {
      console.log(res);
      this.items = [];
      res.data.forEach((element: any) => {
        if (
          element.date.split('T')[0] >
          new Date(Date.now()).toISOString().split('T')[0]
        ) {
          this.items.push(element);
        }
      });
      console.log(this.items);
    });
  }
}
