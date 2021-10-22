import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userData: any = {
    createdAt: '',
    email: '',
    nom: '',
    numero: '',
    postal: null,
    adresse: '',
    prenom: '',
    role: { _id: '', nom: '' },
    status: null,
    updatedAt: '',
    ville: '',
    _id: '',
  };
  profileForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.userService.getUser().subscribe((res: any) => {
      this.userData = res;
      console.warn(this.userData);
    });
    this.profileForm = this.formBuilder.group({
      nom: formBuilder.control(this.userData.nom),
      prenom: formBuilder.control(this.userData.prenom),
      adresse: formBuilder.control(this.userData.adresse),
      postal: formBuilder.control(this.userData.postal),
      ville: formBuilder.control(this.userData.ville),
      email: formBuilder.control(this.userData.email, [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        ),
      ]),
      code: formBuilder.control(this.userData._id),
      telephone: formBuilder.control(this.userData.numero, [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {}
  setData() {
    this.profileForm = this.formBuilder.group({
      nom: this.formBuilder.control(this.userData.nom),
      prenom: this.formBuilder.control(this.userData.prenom),
      adresse: this.formBuilder.control(this.userData.adresse),
      postal: this.formBuilder.control(this.userData.postal),
      ville: this.formBuilder.control(this.userData.ville),
      email: this.formBuilder.control(this.userData.email, [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        ),
      ]),
      code: this.formBuilder.control(this.userData._id),
      telephone: this.formBuilder.control(this.userData.numero, [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }
}
