import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserLogin } from 'src/app/interfaces/user';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acces-hotesse',
  templateUrl: './acces-hotesse.component.html',
  styleUrls: ['./acces-hotesse.component.scss'],
})
export class AccesHotesseComponent implements OnInit {
  user = {
    email: '',
    pwd: '',
  };
  mail: String = '';
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private localStorage: LocalStorageService,
    private jwt: JWTokenService
  ) {
    this.UserService.getUser().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('', [
        // Validators.required,
        // Validators.pattern(
        //   '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        // ),
      ]),
      pwd: formBuilder.control('', [
        // Validators.required,
        // Validators.minLength(6),
      ]),
    });
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
        console.log(test.accessToken);
        this.localStorage.set('x-access-token', test.accessToken);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  control(name: string) {
    return this.loginForm.get(name);
  }
  test = 'faq mention legales contacter nous qui sommes nous cheveux sec ';

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
      // user:
      console.log(res);
    });
  }
}
