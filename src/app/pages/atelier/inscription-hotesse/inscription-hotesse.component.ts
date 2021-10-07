import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription-hotesse',
  templateUrl: './inscription-hotesse.component.html',
  styleUrls: ['./inscription-hotesse.component.scss'],
})
export class InscriptionHotesseComponent implements OnInit {
  message = '';
  mail: String = '';
  registerForm: FormGroup;

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
      postal: formBuilder.control(''),
      ville: formBuilder.control(''),
      telephone: formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    console.log(this.registerForm.value);
    this.UserService.userRegister(
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.email,
      'hotesse',
      this.registerForm.value.postal,
      this.registerForm.value.ville,
      this.registerForm.value.telephone,
      false
    ).subscribe(
      (test: any) => {
        // console.warn(test.status);
        console.log(test);

        this.router.navigate(['/acces-hotesse']);
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
