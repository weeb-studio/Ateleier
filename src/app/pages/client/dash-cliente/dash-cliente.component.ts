import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-cliente',
  templateUrl: './dash-cliente.component.html',
  styleUrls: ['./dash-cliente.component.scss'],
})
export class DashClienteComponent implements OnInit {
  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;
  Mawishlist: boolean = true;
  recommendation: boolean = false;
  userData: any;
  updateForm: FormGroup;

  showMawishlist() {
    this.Mawishlist = true;
    this.recommendation = false;
  }
  showRecommendation() {
    this.recommendation = !this.recommendation;
    this.Mawishlist = !this.Mawishlist;
  }
  items: any = [
    {
      img: 'assets/prod1.svg',
      prix: '12,00€',
    },
    {
      img: 'assets/prod2.svg',
      prix: '120,00€',
    },
    {
      img: 'assets/prod3.svg',
      prix: '55,00€',
    },
    {
      img: 'assets/prod1.svg',
      prix: '145,00€',
    },
    {
      img: 'assets/prod3.svg',
      prix: '8,00€',
    },
  ];
  // async initiateur(){
  //   this.updateForm = this.formBuilder.group({
  //     nom: formBuilder.control(''),
  //     prenom: formBuilder.control('test'),
  //     email: formBuilder.control(''),
  //     adresse: formBuilder.control(''),
  //     code: formBuilder.control(''),
  //     ville: formBuilder.control(''),
  //     tel: formBuilder.control(''),
  //     pwd: formBuilder.control(''),
  //   });
  // }
  constructor(
    private userservices: UserService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.userservices.getUser().subscribe((res: any) => {
      // console.log(res);
      this.userData = res;
      console.log(this.userData);
    });
    this.updateForm = this.formBuilder.group({
      nom: formBuilder.control(''),
      prenom: formBuilder.control(''),
      email: formBuilder.control(''),
      adresse: formBuilder.control(''),
      code: formBuilder.control(''),
      ville: formBuilder.control(''),
      tel: formBuilder.control(''),
      pwd: formBuilder.control(''),
    });
    // this.updateForm.controls.pwd.disable();
    this.updateForm.controls.email.disable();
  }
  onUpdate() {
    console.log(this.updateForm.value);
    this.userservices
      .updateUser(
        this.updateForm.value.nom,
        this.updateForm.value.prenom,
        this.updateForm.value.adresse,
        this.updateForm.value.code,
        this.updateForm.value.ville,
        this.updateForm.value.tel
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  ngOnInit(): void {}
}
