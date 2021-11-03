import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { PointService } from 'src/app/services/point.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hotesse-cadeau',
  templateUrl: './hotesse-cadeau.component.html',
  styleUrls: ['./hotesse-cadeau.component.scss'],
})
export class HotesseCadeauComponent implements OnInit {
  serverURL = environment.SERVER_URL;
  utilisateur: any = { prenom: '' };
  point: any = { nombre: null };
  items: any = [];
  constructor(
    private UserService: UserService,
    private PointService: PointService,
    private CatalogueSerice: CatalogueService
  ) {
    this.getPoint();
    this.getCatalogue();
  }

  ngOnInit(): void {}

  getPoint() {
    this.PointService.getHotessePoint().subscribe((res: any) => {
      this.point = res[0];
    });
  }

  getCatalogue() {
    this.CatalogueSerice.getCatalogueProduct().subscribe((res: any) => {
      this.items = res;
    });
  }

  removePoint(point: number) {
    if (point > this.point.nombre) {
      alert('Pas assez de point pour vos Cadeau');
    } else {
      this.PointService.removeHotessePoint(point).subscribe((res) => {
        this.point = res;
      });
    }
  }
}
