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
  showPage() {
    this.page = !this.page;
  }

  ngOnInit(): void {}
}
