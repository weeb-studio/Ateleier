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
      to: '',
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
      title: 'Bien choisis ses produits 100% naturels',
      to: '',
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
      to: '',
    },
  ];

  ngOnInit(): void {}
}
