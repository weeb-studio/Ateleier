import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaitre-cheveux',
  templateUrl: './connaitre-cheveux.component.html',
  styleUrls: ['./connaitre-cheveux.component.scss'],
})
export class ConnaitreCheveuxComponent implements OnInit {
  constructor() {}

  items: any = [
    {
      img: 'assets/comprendre_cheveu.svg',
      title: 'Comprendre le cheveu',
      to: '',
    },
    {
      img: 'assets/chute_casse.svg',
      title: 'La chute, la casse',
      to: '/programmes/chute-casse',
    },
    {
      img: 'assets/traitements_chimiques.svg',
      title: 'Les traitements chimiques',
      to: '/programmes/traitement-chimique',
    },
    {
      img: 'assets/utilisation_appareils.svg',
      title: 'L’utilisation des appareils chauffants',
      to: '',
    },
    {
      img: 'assets/perruques_tresses.svg',
      title: 'Les perruques, tresses et tissages',
      to: '/programmes/perruques-tresses-tissages',
    },
    {
      img: 'assets/choisis_produits.svg',
      title: 'Les ingrédients à éviter',
      to: '/programmes/ingredients-à-éviter',
    },
    {
      img: 'assets/pousser_cheveux.svg',
      title: 'Faire pousser ses cheveux',
      to: '',
    },
    {
      img: 'assets/cheveux_grossesse.svg',
      title: 'Les cheveux pendant la grossesse',
      to: '',
    },
    {
      img: 'assets/comprendre_cheveu.svg',
      title: 'Les diverses influences sur les cheveux',
      to: '/programmes/diverses-influences',
    },
    {
      img: 'assets/cheveux_en_transition.svg',
      title: 'Prendre soin des cheveux en transition ',
      to: '',
    },
    {
      img: 'assets/soins_locks.svg',
      title: 'prendre soin des locks',
      to: '',
    },
    {
      img: 'assets/composition_ingredient.svg',
      title: 'Composition et ingrédients des shampoing',
      to: '',
    },
    {
      img: 'assets/leave_conditionner.svg',
      title: 'Les leave in conditionner',
      to: '',
    },
    {
      img: 'assets/tempes_degarnies.svg',
      title: 'Comment eviter les tempes degarnies',
      to: '',
    },
    {
      img: 'assets/complement_alimentaire.svg',
      title: 'Les complements alimentaires et soins',
      to: '',
    },
    {
      img: 'assets/cheveux_boucles.svg',
      title: 'prendre soin des cheveux bouclés',
      to: '',
    },
    {
      img: 'assets/cheveux_crepus.svg',
      title: 'Prendre soin des cheveux crépus',
      to: '',
    },
    {
      img: 'assets/cheveux_frisses.svg',
      title: 'Le brushing des cheveux frisés ou creépus',
      to: '',
    },
  ];

  ngOnInit(): void {}
}
