import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porte-monnaie',
  templateUrl: './porte-monnaie.component.html',
  styleUrls: ['./porte-monnaie.component.scss'],
})
export class PorteMonnaieComponent implements OnInit {
  dialog: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  showPage() {
    this.dialog = !this.dialog;
  }
}
