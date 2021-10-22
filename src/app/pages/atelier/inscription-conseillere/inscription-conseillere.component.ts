import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription-conseillere',
  templateUrl: './inscription-conseillere.component.html',
  styleUrls: ['./inscription-conseillere.component.scss'],
})
export class InscriptionConseillereComponent implements OnInit {
  message = '';
  mail: String = '';
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
      email: formBuilder.control('', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        ),
      ]),
      adresse: formBuilder.control(''),
      postal: formBuilder.control(''),
      ville: formBuilder.control(''),
      telephone: formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      pwd: formBuilder.control(''),
    });
  }
  showPass() {
    this.pass = !this.pass;
  }
  ngOnInit(): void {}

  async onSubmit() {
    console.log(this.registerForm.value);
    this.UserService.userRegister(
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.email,
      this.registerForm.value.adresse,
      'conseillere',
      this.registerForm.value.postal,
      this.registerForm.value.ville,
      this.registerForm.value.telephone,
      false,
      this.registerForm.value.pwd
    ).subscribe(
      (test: any) => {
        // console.warn(test.status);
        console.log(test);

        this.router.navigate(['/acces-conseillere']);
      },
      (err: any) => {
        console.log(err);
        this.message = err.error.message;
      }
    );
  }

  control(name: string) {
    return this.registerForm.get(name);
  }
}
