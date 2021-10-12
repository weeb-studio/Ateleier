import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routine-capillaire',
  templateUrl: './routine-capillaire.component.html',
  styleUrls: ['./routine-capillaire.component.scss']
})
export class RoutineCapillaireComponent implements OnInit {

  constructor() { }
  page : boolean = true;
  showPage () {
    this.page = !this.page;
  }

  ngOnInit(): void {
  }

}
