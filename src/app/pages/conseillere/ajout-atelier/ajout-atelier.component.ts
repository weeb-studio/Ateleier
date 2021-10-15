import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/interfaces/atelier';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-ajout-atelier',
  templateUrl: './ajout-atelier.component.html',
  styleUrls: ['./ajout-atelier.component.scss'],
})
export class AjoutAtelierComponent implements OnInit {
  atelierForm: FormGroup;
  atelier: Atelier | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private atelierService: AtelierService
  ) {
    this.atelierForm = this.formBuilder.group({
      participants: formBuilder.control('', [Validators.required]),
      place: formBuilder.control('', [Validators.required]),
      theme: formBuilder.control(''),
      nomHotesse: formBuilder.control(''),
      prenomHotesse: formBuilder.control(''),
      adresse: formBuilder.control(''),
      postal: formBuilder.control(''),
      ville: formBuilder.control(''),
      heure: formBuilder.control(''),
      date: formBuilder.control(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.atelierForm.value.place);
    this.atelierService
      .createAtelier(
        this.atelierForm.value.place,
        this.atelierForm.value.theme,
        this.atelierForm.value.participants,
        this.atelierForm.value.date,
        // this.atelierForm.value.nomHotesse,
        // this.atelierForm.value.prenomHotesse,
        // this.atelierForm.value.adresse,
        this.atelierForm.value.postal,
        this.atelierForm.value.ville
        // this.atelierForm.value,
        // this.atelierForm.value.heure,
        // 'ouvert',
        // true
      )
      .subscribe((test) => {
        console.log(test);
      });
    // this.atelier.place = this.atelierForm.value.place;
    // this.atelier.theme = this.atelierForm.value.theme;
    // this.atelier.hotesse = this.atelierForm.value; //=========
    // this.atelier.nomHotesse = this.atelierForm.value.nomHotesse;
    // this.atelier.prenomHotesse = this.atelierForm.value.prenomHotesse;
    // this.atelier.adresseHotesse = this.atelierForm.value.adresse;
    // this.atelier.postal = this.atelierForm.value.postal;
    // this.atelier.villeHotesse = this.atelierForm.value.ville;
    // this.atelier.date = this.atelierForm.value;
    // this.atelier.time = this.atelierForm.value.heure;
    // this.atelier.status = this.atelierForm.value;
    // this.atelier.ouvert = true; //this.atelierForm.value;

    console.log(this.atelier);
  }
}
