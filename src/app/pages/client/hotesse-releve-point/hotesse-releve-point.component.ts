import { Component, OnInit } from '@angular/core';
import { PointService } from 'src/app/services/point.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hotesse-releve-point',
  templateUrl: './hotesse-releve-point.component.html',
  styleUrls: ['./hotesse-releve-point.component.scss'],
})
export class HotesseRelevePointComponent implements OnInit {
  utilisateur: any = { prenom: '' };
  point: any = { point: null };
  constructor(
    private UserService: UserService,
    private PointService: PointService
  ) {
    this.getPoint();
  }

  ngOnInit(): void {}

  getPoint() {
    this.PointService.getHotessePoint().subscribe((res: any) => {
      this.point = res[0];
    });
  }
}
