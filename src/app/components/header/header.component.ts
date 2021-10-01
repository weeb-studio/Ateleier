import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @Input('master') masterName = '';//
  constructor(private router: Router, private route: ActivatedRoute) {}
  show: Boolean = false;
  user: Boolean = false;
  subMenu: Boolean = false;
  subMenu1: Boolean = false;
  ngOnInit(): void {}

  go(navigate: String) {
    this.show = false;
    this.subMenu = false;
    this.router.navigate([`${navigate}`], { relativeTo: this.route });
  }
  goTo(navigate: String) {
    this.user = false;
    this.router.navigate([`${navigate}`], { relativeTo: this.route });
  }
  showDialog() {
    this.subMenu1 = false;
    this.subMenu = false;
    this.show = !this.show;
  }

  active() {}

  showUserDialog() {
    this.user = !this.user;
  }

  showSubMenu() {
    this.subMenu1 = false;
    this.subMenu = !this.subMenu;
  }
  showSubMenu1() {
    this.subMenu = false;
    this.subMenu1 = !this.subMenu1;
  }
}
