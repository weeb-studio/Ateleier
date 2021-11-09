import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { bindCallback } from 'rxjs';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { PanierService } from 'src/app/services/panier.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss'],
})
export class MesProduitsComponent implements OnInit {
  public selectedFile: any;
  // quantite : number = this.qte;
  page1: boolean = false;
  page2: boolean = false;
  page3: boolean = true;
  monPanier: boolean = false;
  recommendation: boolean = true;
  userData: any;
  productData: any;
  server = environment.SERVER_URL + '/';
  resultats: any = [{ produit: { imageURL: '' } }];
  panier: boolean = false;
  livraison: boolean = false;
  livraison1: boolean = false;
  livraison2: boolean = false;
  paiement: boolean = false;
  part1: boolean = false;
  addForm: FormGroup;
  
  showMawishlist() {
    this.part1 = true;
    this.monPanier = true;
    this.recommendation = false;
    this.livraison = false;
    this.panier = false;
    this.paiement = false;
  }
  showRecommendation() {
    this.recommendation = true;
    this.part1 = false;
    this.monPanier = false;
    this.livraison = false;
    this.panier = false;
    this.paiement = false;
  }
  items: any;
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
    this.catalogue.getCatalogueProduct().subscribe((test: any) => {
      this.items = test;
      console.log(this.items);
    });
    this.addForm = this.formBuilder.group({
      qte : formBuilder.control('')
    })
    this.getpanier();
    this.bill();
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

  addPanier(id: string) {
    this.panierservice.addProductToPanier(id, this.addForm.value.qte).subscribe((res: any) => {
      console.log(res);
    });
    this.getpanier();
    console.log(this.addForm.value.qte)
  }

  getpanier() {
    this.panierservice.getProductToPanier().subscribe((res: any) => {
      console.log(res);
      this.resultats = res;
    });
  }
  bill() : number{
    var facture : number
    facture=0;
    for(var items of this.resultats){
      var a = parseInt(items.qte)
      console.log(a);
      var b = parseInt(items.produit.prix)
      console.log(b);
      facture = facture + (a * b);
      console.log(facture);
    }
    return facture;
  }
  Facture : number = this.bill()

  remove(id: string) {
    this.panierservice.removeProductToPanier(id).subscribe((res: any) => {
      console.log(res);
      this.getpanier();
    });
  }

  ngOnInit(): void {
  }
}
