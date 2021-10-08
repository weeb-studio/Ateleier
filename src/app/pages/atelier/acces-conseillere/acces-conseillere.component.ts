import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acces-conseillere',
  templateUrl: './acces-conseillere.component.html',
  styleUrls: ['./acces-conseillere.component.scss'],
})
export class AccesConseillereComponent implements OnInit {
  pass: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showPass() {
    this.pass = !this.pass;
  }
}
