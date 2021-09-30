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
  ngOnInit(): void {}

  go(navigate: String) {
    this.show = false;
    this.subMenu = false;
    this.router.navigate([`${navigate}`], { relativeTo: this.route });
  }
  showDialog() {
    this.show = !this.show;
  }

  active() {}

  showUserDialog() {
    this.user = !this.user;
  }

  showSubMenu() {
    this.subMenu = !this.subMenu;
  }
}
