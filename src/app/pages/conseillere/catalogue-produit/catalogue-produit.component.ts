import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue-produit',
  templateUrl: './catalogue-produit.component.html',
  styleUrls: ['./catalogue-produit.component.scss'],
})
export class CatalogueProduitComponent implements OnInit {
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

  ngOnInit(): void {}
}
