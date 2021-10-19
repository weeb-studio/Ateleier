import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routine-capillaire',
  templateUrl: './routine-capillaire.component.html',
  styleUrls: ['./routine-capillaire.component.scss'],
})
export class RoutineCapillaireComponent implements OnInit {
  constructor() {}
  page: boolean = true;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;
  page1: boolean = false;
  page2: boolean = false;

  showPage() {
    this.page = !this.page;
  }
  remoter(){
    window.scrollTo({
      top:400
    })
  }


  ngOnInit(): void {}
}
