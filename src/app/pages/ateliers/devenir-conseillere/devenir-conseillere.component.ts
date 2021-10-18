import { Component, OnInit } from '@angular/core';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-devenir-conseillere',
  templateUrl: './devenir-conseillere.component.html',
  styleUrls: ['./devenir-conseillere.component.scss'],
})
export class DevenirConseillereComponent implements OnInit {
  constructor(private atelierService: AtelierService) {
    this.getAtelier();
  }

  items: any = [];
  search: any = [];
  ngOnInit(): void {}

  getAtelier() {
    this.atelierService.getAtelier().subscribe((res: any) => {
      this.items = res.data;
      console.log(this.items);
    });
  }

  searchAtelier(event: any) {
    console.log(event.target.value);
    if (event.target.value == '') {
      this.search = [];
    } else {
      this.atelierService
        .getAtelier(event.target.value)
        .subscribe((res: any) => {
          // console.log(res);
          var obj: any = res;
          this.search = obj.data;
          console.log(this.search);
        });
    }
  }
}
