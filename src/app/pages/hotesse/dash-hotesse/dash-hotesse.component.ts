import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-hotesse',
  templateUrl: './dash-hotesse.component.html',
  styleUrls: ['./dash-hotesse.component.scss']
})
export class DashHotesseComponent implements OnInit {
  utilisateur: any;
  constructor(
    private UserService: UserService
  ) { this.getUser();}
  getUser() {
    this.UserService.getUser().subscribe((res) => {
      this.utilisateur = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
