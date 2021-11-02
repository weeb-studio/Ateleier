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
  public selectedFile: any;
  public choix: string ="";
  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;
  Mawishlist: boolean = true;
  recommendation: boolean = false;
  userData: any;
  updateForm: FormGroup;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;
  submit: boolean = false;
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
    this.updateForm.disable();
    this.updateForm.controls.email.disable();
    this.updateForm.controls.pwd.disable();
  }
  update(){
    this.submit=true; 
    this.updateForm.enable();
    this.updateForm.controls.email.disable();
    this.updateForm.controls.pwd.disable();
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
  getUser() {
    this.userservices.getUser().subscribe((res: any) => {
      this.userData = res;
      console.warn(this.userData);
    });
  }
  profileImage(event: any) {
    this.selectedFile = <File>event.target.files[0];

    this.userservices
      .imageSet(<File>this.selectedFile, this.selectedFile.name)
      .subscribe((res) => {
        console.log(res);
      });
    this.getUser();
  }

  ngOnInit(): void {}
}
