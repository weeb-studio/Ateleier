import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-routine-capillaire',
  templateUrl: './routine-capillaire.component.html',
  styleUrls: ['./routine-capillaire.component.scss'],
})
export class RoutineCapillaireComponent implements OnInit {
  name: string = '';
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
      top: 100,
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
    private contactService: ContactService,
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

  question1 = this.formBuilder.group({
    q1: [''],
  });
  question2 = this.formBuilder.group({
    q2_1: [''],
    q2_2: [''],
    q2_3: [''],
    q2_4: [''],
    q2_5: [''],
    q2_6: [''],
    q2_7: [''],
    q2_8: [''],
  });
  question3 = this.formBuilder.group({
    q3: [''],
  });
  question4 = this.formBuilder.group({
    q4: [''],
  });
  question5 = this.formBuilder.group({
    q5: [''],
  });

  next1() {
    if (this.question1.value.q1 != '') {
      console.log(this.question1.value.q1);
      this.show2 = true;
      this.show1 = false;
    }
  }
  next2() {
    if (
      this.question2.value.q2_1 != '' ||
      this.question2.value.q2_2 != '' ||
      this.question2.value.q2_3 != '' ||
      this.question2.value.q2_4 != '' ||
      this.question2.value.q2_5 != '' ||
      this.question2.value.q2_6 != '' ||
      this.question2.value.q2_7 != '' ||
      this.question2.value.q2_8 != ''
    ) {
      this.show3 = true;
      this.show2 = false;
    }
  }
  next3() {
    if (this.question3.value.q3 != '') {
      console.log(this.question3.value.q3);
      this.show4 = true;
      this.show3 = false;
    }
  }
  next4() {
    if (this.question4.value.q4 != '') {
      console.log(this.question4.value.q4);
      this.show5 = true;
      this.show4 = false;
    }
  }
  next5() {
    if (this.question5.value.q5 != '') {
      console.log(this.question5.value.q5);

      this.show5 = false;
      this.router.navigate([
        this.contactService.algoRoutine(
          this.question1.value.q1,
          this.question3.value.q3,
          this.question4.value.q4,
          this.question5.value.q5
        ),
      ]);
    }
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
