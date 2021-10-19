import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  constructor(private catalogueService: CatalogueService) {
    this.getCatalogueProduct('CAPILLAIRES');
  }
  items: any = [];
  dialog: boolean = false;
  tab: boolean = true;

  //CAPILLAIRES - COIFFURES
  getCatalogueProduct(value?: String) {
    this.catalogueService.getCatalogueProduct().subscribe((res) => {
      let test: any = [];
      test = res;
      this.items = [];
      test.forEach((element: any) => {
        if (element.produit.categorie == value) {
          this.items.push(element);
        }
      });
      // this.items = res;
      console.log(this.items);
    });
  }

  changeTab(tab: boolean) {
    this.tab = tab;
    if (tab) {
      this.getCatalogueProduct('CAPILLAIRES');
    } else {
      this.getCatalogueProduct('COIFFURES');
    }
  }

  removeFromCatalogue(id: String) {
    this.catalogueService.removeProductToCatalogue(id).subscribe((res) => {
      console.log(res);
      if (this.tab) {
        this.getCatalogueProduct('CAPILLAIRES');
      } else {
        this.getCatalogueProduct('COIFFURES');
      }
    });
  }
  // items = [
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  //   {
  //     nom: 'Perruques',
  //     prix: 12,
  //     img: 'assets/peruque.png',
  //   },
  // ];

  product: any = [];
  qte: any = 1;

  ngOnInit(): void {}
  moins() {
    if (this.qte > 1) {
      this.qte = this.qte - 1;
    }
  }
  plus() {
    this.qte = this.qte + 1;
  }
  search(event: any) {
    console.log(event.target.value);
    this.catalogueService.getProduct(event.target.value).subscribe((res) => {
      var obj: any = res;
      this.product = obj.data;
      console.log(this.product);
    });
  }
  addToCatalogue(productId: String, qte: number, categorie: String) {
    this.catalogueService
      .addProductToCatalogue(productId, qte)
      .subscribe((res) => {
        console.log(res);
        if (categorie == 'CAPILLAIRES') {
          this.changeTab(true);
        } else {
          this.changeTab(false);
        }
        // this.getCatalogueProduct(categorie);
        this.dialog = false;
        this.product = [];
      });
  }
}
