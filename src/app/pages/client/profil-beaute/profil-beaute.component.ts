import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ContactService } from 'src/app/services/contact.service';
import { PanierService } from 'src/app/services/panier.service';
import { ProfilBeauteService } from 'src/app/services/profil-beaute.service';
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
  algo: FormGroup;
  choix : boolean = false;
  final : boolean =false;
  objectif : boolean =false;
  profil : boolean =true;
  resultat : any;
  submit : boolean = false;
  constructor(
    private userservices: UserService,
    private formBuilder: FormBuilder,
    private route: Router,
    private panierservice: PanierService,
    private catalogue: CatalogueService,
    private contactservice: ContactService,
    private profilBeaute: ProfilBeauteService
  ) {
    this.userservices.getUser().subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData);
    });
    this.algo = this.formBuilder.group({
      title1: formBuilder.control(''),
      title2: formBuilder.control(''),
      title3: formBuilder.control(''),
      title4: formBuilder.control(''),
      title5: formBuilder.control('')
    });
    
  }
  respond : any;
  answer : boolean = false;
  ans(){
    this.route.navigate([
      this.contactservice.algoProfil(
        this.algo.value.title1,
        this.algo.value.title2,
        this.algo.value.title3,
        this.algo.value.title4
      )
    ]);
    this.answer = true;
    this.profil = false;
    this.final = false;
    this.objectif = false;
    console.log('reussie')
  }
  register(){
    this.profilBeaute.addProfil(
      this.algo.value.title1,
      this.algo.value.title2,
      this.algo.value.title3,
      this.algo.value.title4,
      this.algo.value.title5,
    ).subscribe((res:any) => {
      this.respond = res;
      console.log(this.respond);
    });
  }

  // getprofil() {
  //   this.profilBeaute.getProfil().subscribe((res: any) => {
  //     this.resultat = res;
  //     console.log(this.resultat)
  //   });
  // }

  goTo(){
    
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

  ngOnInit(): void {
    this.profilBeaute.getProfil().subscribe((res:any) => {
      this.resultat = res;
      console.log(this.resultat);
      if(this.resultat.length == 0){
        this.submit = true;
      }
      else{
        this.submit = false ;
      }
    });
  }
}
