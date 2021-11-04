import { Component, OnInit } from '@angular/core';
import { CadeauService } from 'src/app/services/cadeau.service';
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
  cadeau: any = [];
  constructor(
    private UserService: UserService,
    private PointService: PointService,
    private CatalogueSerice: CatalogueService,
    private CadeauService: CadeauService
  ) {
    this.getPoint();
    this.getCatalogue();
    this.getAwaitCadeau();
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

  removePoint(point: number, idProduit: string) {
    if (point > this.point.nombre) {
      alert('Pas assez de point pour vos Cadeau');
    } else {
      this.PointService.removeHotessePoint(point).subscribe((res) => {
        this.point = res;
        this.CadeauService.addHotesseCadeau(idProduit).subscribe((res: any) => {
          console.log(res);
          this.getAwaitCadeau();
        });
      });
    }
  }

  getAwaitCadeau() {
    this.CadeauService.getHotesseCadeau().subscribe((res: any) => {
      this.cadeau = res;
      console.log(this.cadeau);
    });
  }

  removeCadeau(id: string, qte: number, prix: number) {
    this.CadeauService.deleteCadeau(id).subscribe((res: any) => {
      this.PointService.addHotessePoint(qte * prix).subscribe((result: any) => {
        console.log(result);
        this.point = result;
        this.getAwaitCadeau();
      });
    });
  }
}
