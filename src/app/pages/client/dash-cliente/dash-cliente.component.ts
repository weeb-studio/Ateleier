import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { PanierService } from 'src/app/services/panier.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dash-cliente',
  templateUrl: './dash-cliente.component.html',
  styleUrls: ['./dash-cliente.component.scss'],
})
export class DashClienteComponent implements OnInit {
  public selectedFile: any;
  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;
  userData: any;
  productData: any
  updateForm: FormGroup;
  submit: boolean = false;
  server = environment.SERVER_URL+"/";
  
  constructor(
    private userservices: UserService,
    private formBuilder: FormBuilder,
    private route: Router,
    private panierservice : PanierService,
    private catalogue: CatalogueService
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
