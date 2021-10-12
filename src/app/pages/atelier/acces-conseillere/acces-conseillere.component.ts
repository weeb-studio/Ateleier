import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acces-conseillere',
  templateUrl: './acces-conseillere.component.html',
  styleUrls: ['./acces-conseillere.component.scss'],
})
export class AccesConseillereComponent implements OnInit {
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
        Validators.minLength(6),
      ]),
    });
  }

  showPass() {
    this.pass = !this.pass;
  }
  ngOnInit(): void {}

  async onSubmit() {
    console.log(this.loginForm.value);
    this.UserService.userLogin(
      this.loginForm.value.email,
      this.loginForm.value.pwd
    ).subscribe(
      (test: any) => {
        // console.warn(test.status);
        console.log(test.role.nom);
        if (test.role.nom == 'conseillere') {
          this.localStorage.set('x-access-token', test.accessToken);
          this.router.navigate(['/conseillere']);
        }
      },
      (err: any) => {
        console.log(err);
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
