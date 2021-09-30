import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atelier-header',
  templateUrl: './atelier-header.component.html',
  styleUrls: ['./atelier-header.component.scss'],
})
export class AtelierHeaderComponent implements OnInit {
  @Input('head') head = '';
  constructor() {}

  ngOnInit(): void {}
}
