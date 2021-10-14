import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  constructor(private catalogueService: CatalogueService) {}
  dialog: boolean = false;

  items = [
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
    {
      nom: 'Perruques',
      prix: 12,
      img: 'assets/peruque.png',
    },
  ];

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
}
