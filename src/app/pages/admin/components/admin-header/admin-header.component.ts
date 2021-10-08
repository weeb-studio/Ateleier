import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  // @Input('master') masterName = '';//
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private UserService: UserService,
    private localStorage: LocalStorageService,
    private jwt: JWTokenService
  ) {}
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
  removeToken() {
    this.localStorage.remove('x-access-token');
    this.router.navigate(['/connexion']);
  }
}
