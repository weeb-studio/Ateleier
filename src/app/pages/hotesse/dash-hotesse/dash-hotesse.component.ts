import { Component, OnInit } from '@angular/core';
import { PointService } from 'src/app/services/point.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-hotesse',
  templateUrl: './dash-hotesse.component.html',
  styleUrls: ['./dash-hotesse.component.scss'],
})
export class DashHotesseComponent implements OnInit {
  utilisateur: any = { prenom: '' };
  point: any = { point: null };
  constructor(
    private UserService: UserService,
    private PointService: PointService
  ) {
    this.getUser();
    this.getPoint();
  }
  getUser() {
    this.UserService.getUser().subscribe((res) => {
      this.utilisateur = res;
    });
  }

  getPoint() {
    this.PointService.getHotessePoint().subscribe((res: any) => {
      this.point = res[0];
    });
  }

  ngOnInit(): void {}
}
