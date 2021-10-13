import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-atelier',
  templateUrl: './ajout-atelier.component.html',
  styleUrls: ['./ajout-atelier.component.scss'],
})
export class AjoutAtelierComponent implements OnInit {
  atelierForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.atelierForm.value);
  }
}
