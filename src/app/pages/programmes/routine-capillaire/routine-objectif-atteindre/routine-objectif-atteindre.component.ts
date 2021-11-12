import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routine-objectif-atteindre',
  templateUrl: './routine-objectif-atteindre.component.html',
  styleUrls: ['./routine-objectif-atteindre.component.scss']
})
export class RoutineObjectifAtteindreComponent implements OnInit {
  page1: boolean = true;
  page2: boolean = false;
  page: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
