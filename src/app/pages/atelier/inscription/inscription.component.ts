import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private UserServices: UserService,
    private jwt: JWTokenService,
    private localstorage: LocalStorageService,
    private route: Router
  ) {
    this.registerForm = this.formBuilder.group({
      nom: formBuilder.control(''),
      prenom: formBuilder.control(''),
      email: formBuilder.control(''),
      code: formBuilder.control(''),
      ville: formBuilder.control(''),
      tel: formBuilder.control(''),
      pwd: formBuilder.control(''),
    });
  }

  onRegister() {
    console.log(this.registerForm.value);
    this.UserServices.userRegister(
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.email,
      'user',
      this.registerForm.value.code,
      this.registerForm.value.ville,
      this.registerForm.value.tel,
      true,
      this.registerForm.value.pwd
    ).subscribe((test: any) => {
      console.log(test);
    });
  }

  ngOnInit(): void {}
}
