import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserLogin } from 'src/app/interfaces/user';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  user = {
    email: '',
    pwd: '',
  };
  message = '';
  mail: String = '';
  loginForm: FormGroup;
  pass: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private localStorage: LocalStorageService,
    private jwt: JWTokenService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        ),
      ]),
      pwd: formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  showPass() {
    this.pass = !this.pass;
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    this.UserService.userLogin(
      this.loginForm.value.email,
      this.loginForm.value.pwd
    ).subscribe(
      (test: any) => {
        // console.warn(test.status);
        console.log(test.role.nom);
        if (test.role.nom == 'admin') {
          this.localStorage.set('x-access-token', test.accessToken);
          this.router.navigate(['/admin/dashboard']);
        }
      },
      (err: any) => {
        console.error(err);
        this.message = err.error.message;
      }
    );
  }

  control(name: string) {
    return this.loginForm.get(name);
  }

  // userLogin(loginForm: NgForm) {
  //   console.log(this.user.email + ' mot de passe ' + this.user.password);
  //   console.log('valeurs: ' + JSON.stringify(loginForm.value));
  // }

  getToken() {
    console.log(this.localStorage.get('x-access-token'));
  }
  removeToken() {
    this.localStorage.remove('x-access-token');
  }
  getUser() {
    this.UserService.getUser().subscribe((res) => {
      console.log(res);
    });
  }
  isAuth() {
    console.log('is Auth ' + this.jwt.isAuthenticated());
  }
}
