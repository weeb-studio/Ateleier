import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @Input('master') masterName = '';//
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private UserService: UserService,
    private localStorage: LocalStorageService
  ) {
    this.getUser();
  }
  show: Boolean = false;
  user: Boolean = false;
  subMenu: Boolean = false;
  subMenu1: Boolean = false;
  hotesseDash: boolean = false;

  utilisateur: any;
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

  getImage(): Boolean {
    let result: Boolean = false;
    if (
      this.utilisateur != null &&
      this.utilisateur.imageURL &&
      this.utilisateur.imageURL != 'default.jpg'
    ) {
      result = true;
    }
    return result;
  }

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

  getUser() {
    this.UserService.getUser().subscribe((res) => {
      this.utilisateur = res;
      console.log(res);
    });
  }

  removeToken() {
    this.localStorage.remove('x-access-token');
    this.router.navigate(['/acces-conseillere']);
  }

  redirect() {
    if (this.utilisateur.role.nom == 'conseillere') {
      this, this.router.navigate(['/conseillere']);
    }

    if (this.utilisateur.role.nom == 'user') {
      this, this.router.navigate(['/cliente']);
    }

    if (this.utilisateur.role.nom == 'hotesse') {
      // this, this.router.navigate(['/hotesse']);
      this.hotesseDash = !this.hotesseDash;
    }
  }
}
