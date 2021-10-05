import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private localStorage: LocalStorageService,
    private jwt: JWTokenService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  removeToken() {
    this.localStorage.remove('x-access-token');
    this.route.navigate(['/connexion']);
  }
}
