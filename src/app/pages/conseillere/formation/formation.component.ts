import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [
    {
      title: 'presentation',
      time: '5',
    },
    {
      title: 'INTRODUCTION DU THÈME',
      time: '3',
    },
    {
      title: 'DÉMONSTRATION COMMERCIALE',
      time: '15',
    },
  ];
}
