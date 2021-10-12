import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routine-objectif',
  templateUrl: './routine-objectif.component.html',
  styleUrls: ['./routine-objectif.component.scss']
})
export class RoutineObjectifComponent implements OnInit {

  constructor() { }
  modal1 : boolean = false
  showModal1 (){
    this.modal1 = !this.modal1;
  }

  ngOnInit(): void {
  }

}
