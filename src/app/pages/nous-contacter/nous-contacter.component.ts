import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { JWTokenService } from 'src/app/services/jwtoken.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.component.html',
  styleUrls: ['./nous-contacter.component.scss'],
})
export class NousContacterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private localStorage: LocalStorageService,
    private jwt: JWTokenService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      nom: formBuilder.control('', [Validators.required]),
      email: formBuilder.control('', [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        ),
      ]),
      objet: formBuilder.control('', [Validators.required]),
      message: formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }
  loginForm: FormGroup;
  ngOnInit(): void {}
  onSubmit() {
    this.contactService
      .addContact(
        this.loginForm.value.nom,
        this.loginForm.value.email,
        this.loginForm.value.objet,
        this.loginForm.value.message
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  control(name: string) {
    return this.loginForm.get(name);
  }
}
