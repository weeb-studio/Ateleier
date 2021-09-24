import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonie',
  templateUrl: './testimonie.component.html',
  styleUrls: ['./testimonie.component.scss'],
})
export class TestimonieComponent implements OnInit {
  items: any;

  constructor() {}

  ngOnInit(): void {
    this.initItems();
  }

  initItems() {
    this.items = [
      {
        image: 'assets/avatar2.png',
        nom: 'Alexandra',
        ville: 'Nantes',
        text: 'J’ai assisté a mon premier atelier capillaire, organisé par une conseillère Bigoodee chez une amie qui l’accueille chez elle en tant qu’hôtesse. J’ai pu en apprendre d’avantage sur mon type de cheveux, comment les entretenir et quelle produit acheter pour les entretenir.',
      },
      {
        image: 'assets/avatar.png',
        nom: 'Isabelle',
        ville: 'Paris',
        text: 'J’étais à la recherche de soins adapter à mon type de cheveux, jusqu’ici en achetant en ligne. Il arrivait que certains produits ne me correspondent pas. j’ai découvert Bigooshop, qui grâce a son algorithme, me permet de commander des soins capillaires qui sont adaptés à mes cheveux. ',
      },
      ,
      {
        image: 'assets/avatar3.png',
        nom: 'Sarah',
        ville: 'Toulous',
        text: 'Jusqu’ici je rencontrais des difficultés pour trouver une coiffeuse proche de mon domicile, mais grâce à L’application mobile de réservation de coiffeuses à domicile de Bigoodee, je trouve et réserve les meilleurs coiffeuses proche de chez moi.',
      },
    ];
  }
}
