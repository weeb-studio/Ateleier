import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  show: Boolean = false;
  ngOnInit(): void {}

  showDialog() {
    this.show = !this.show;
  }
}
