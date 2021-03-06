import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-routine-capillaire',
  templateUrl: './routine-capillaire.component.html',
  styleUrls: ['./routine-capillaire.component.scss'],
})
export class RoutineCapillaireComponent implements OnInit {
  page: boolean = true;
  connexion: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;
  page1: boolean = false;
  page2: boolean = false;
  register: boolean = false;

  showPage() {
    this.page = !this.page;
  }
  remoter() {
    window.scrollTo({
      top: 500,
    });
  }
  user = {
    email: '',
    pwd: '',
  };
  message = '';
  mail: String = '';
  loginForm: FormGroup;
  registerForm: FormGroup;
  pass: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private localStorage: LocalStorageService,
    private jwt: JWTokenService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      nom: formBuilder.control(''),
      prenom: formBuilder.control(''),
      email: formBuilder.control(''),
      adresse: formBuilder.control(''),
      code: formBuilder.control(''),
      ville: formBuilder.control(''),
      tel: formBuilder.control(''),
      pwd: formBuilder.control(''),
    });
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

  onRegister() {
    console.log(this.registerForm.value);
    this.UserService.userRegister(
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.email,
      this.registerForm.value.adresse,
      'user',
      this.registerForm.value.code,
      this.registerForm.value.ville,
      this.registerForm.value.tel,
      true,
      this.registerForm.value.pwd
    ).subscribe(
      (test: any) => {
        console.log(test);
        this.UserService.userLogin(
          this.registerForm.value.email,
          this.registerForm.value.pwd
        ).subscribe((test: any) => {
          this.localStorage.set('x-access-token', test.accessToken);
          this.show1 = true;
          this.register = false;
        });
      },
      (err: any) => {
        console.error(err);
        this.message = err.error.message;
      }
    );
  }

  showModal() {}

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
          this.show1 = true;
          this.connexion = false;
        }
        if (test.role.nom == 'user') {
          this.localStorage.set('x-access-token', test.accessToken);
          this.show1 = true;
          this.connexion = false;
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
    this.UserService.getUser().subscribe(
      (res: any) => {
        console.log(res);
        if (res != null) {
          this.show1 = true;
        } else {
          this.connexion = true;
        }
      },
      (er) => {
        console.warn(er);
        this.connexion = true;
      }
    );
  }
  isAuth() {
    console.log('is Auth ' + this.jwt.isAuthenticated());
  }
}
