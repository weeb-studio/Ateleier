import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/interfaces/atelier';
import { AtelierService } from 'src/app/services/atelier.service';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import frLocale from '@fullcalendar/core/locales/fr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-atelier',
  templateUrl: './ajout-atelier.component.html',
  styleUrls: ['./ajout-atelier.component.scss'],
})
export class AjoutAtelierComponent implements OnInit {
  atelierForm: FormGroup;
  atelier: Atelier | undefined;
  event: any = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    selectable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.event,
    eventColor: '#ff3e79',
    locales: [frLocale],

    headerToolbar: {
      left: 'today',
      center: 'title',
      right: 'prev,next',
    },
    // locales: {},
    locale: 'fr', // the initial locale
  };

  // toggleWeekends() {
  //   this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  // }
  handleDateClick(arg: any) {
    // alert('La date selectionnée:  ' + arg.dateStr);
    this.atelierForm = this.formBuilder.group({
      date: this.formBuilder.control(arg.dateStr),
      // this.atelierForm.value.date = arg.dateStr;
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private atelierService: AtelierService,
    private route: ActivatedRoute
  ) {
    this.atelierForm = this.formBuilder.group({
      participants: formBuilder.control('', [Validators.required]),
      place: formBuilder.control('', [Validators.required]),
      theme: formBuilder.control(''),
      nomHotesse: formBuilder.control('test'),
      prenomHotesse: formBuilder.control(''),
      adresse: formBuilder.control(''),
      postal: formBuilder.control(''),
      ville: formBuilder.control(''),
      heure: formBuilder.control(''),
      date: formBuilder.control(''),
    });
    this.atelierForm.controls.date.disable();
  }

  ngOnInit(): void {
    this.route.snapshot.data['event'].forEach((element: any) => {
      // console.log(element.date.split('T')[0]);
      // console.warn(new Date(Date.now()).toISOString().split('T')[0]);
      if (
        element.date.split('T')[0] <
        new Date(Date.now()).toISOString().split('T')[0]
      ) {
        this.event.push({
          title: element.theme,
          date: element.date.split('T')[0],
          backgroundColor: '#4c566c',
        });
      } else if (
        element.date.split('T')[0] ==
        new Date(Date.now()).toISOString().split('T')[0]
      ) {
        this.event.push({
          title: element.theme,
          date: element.date.split('T')[0],
          backgroundColor: '#00ff00',
        });
      } else {
        this.event.push({
          title: element.theme,
          date: element.date.split('T')[0],
        });
      }
    });
    console.log(this.event);
  }

  onSubmit() {
    console.log(this.atelierForm.value);
    // this.atelierService
    //   .createAtelier(
    //     this.atelierForm.value.place,
    //     this.atelierForm.value.theme,
    //     this.atelierForm.value.participants,
    //     this.atelierForm.value.date,
    //     // this.atelierForm.value.nomHotesse,
    //     // this.atelierForm.value.prenomHotesse,
    //     // this.atelierForm.value.adresse,
    //     this.atelierForm.value.postal,
    //     this.atelierForm.value.ville,
    //     // this.atelierForm.value,
    //     this.atelierForm.value.heure
    //     // 'ouvert',
    //     // true
    //   )
    //   .subscribe((test) => {
    //     console.log(test);
    //   });

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
