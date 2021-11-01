import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-conseillere',
  templateUrl: './dash-conseillere.component.html',
  styleUrls: ['./dash-conseillere.component.scss'],
})
export class DashConseillereComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [
    {
      value: 3,
      text: 'Atelier du jour',
    },
    {
      value: 20,
      text: 'Atelier de la semaine',
    },
    {
      value: 75,
      text: 'Atelier du mois',
    },
  ];

  CA = [
    {
      value: 500,
      text: 'C.A Jourlier',
    },
    {
      value: 3000,
      text: 'C.A Hebdomadaire',
    },
    {
      value: 10000,
      text: 'C.A Mensuel',
    },
  ];
}
