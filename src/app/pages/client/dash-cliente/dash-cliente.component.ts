import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-cliente',
  templateUrl: './dash-cliente.component.html',
  styleUrls: ['./dash-cliente.component.scss']
})
export class DashClienteComponent implements OnInit {

    page1 : boolean = true;
    page2 : boolean = false;
    page3 : boolean = false;
    Mawishlist : boolean = true;
  recommendation : boolean = false;

  showMawishlist(){
    this.Mawishlist = true;
    this.recommendation = false;
  }
  showRecommendation(){
    this.recommendation = !this.recommendation;
    this.Mawishlist = !this.Mawishlist;
  }
  items : any =[
    {
      img : 'assets/prod1.svg',
      prix : '12,00€'
    },
    {
      img : 'assets/prod2.svg',
      prix : '120,00€'
    },
    {
      img : 'assets/prod3.svg',
      prix : '55,00€'
    },
    {
      img : 'assets/prod1.svg',
      prix : '145,00€'
    },
    {
      img : 'assets/prod3.svg',
      prix : '8,00€'
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
