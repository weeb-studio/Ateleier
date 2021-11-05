import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { PanierService } from 'src/app/services/panier.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil-beaute',
  templateUrl: './profil-beaute.component.html',
  styleUrls: ['./profil-beaute.component.scss'],
})
export class ProfilBeauteComponent implements OnInit {
  public selectedFile: any;
  public qte: string = '';
  public quantite: number = 4;
  page1: boolean = false;
  page2: boolean = true;
  page3: boolean = false;
  userData: any;
  server = environment.SERVER_URL + '/';
  constructor(
    private userservices: UserService,
    private formBuilder: FormBuilder,
    private route: Router,
    private panierservice: PanierService,
    private catalogue: CatalogueService
  ) {
    this.userservices.getUser().subscribe((res: any) => {
      // console.log(res);
      this.userData = res;
      console.log(this.userData);
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
