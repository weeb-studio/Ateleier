import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import frLocale from '@fullcalendar/core/locales/fr';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  event: any = [];
  atelier: any = [];
  selectedDate: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    selectable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    /*this.event,*/
    events: this.event,
    // [
    //   { title: 'event 1', date: '2021-10-25', backgroundColor: '#ff3fa2' },
    //   { title: 'event 1', date: '2021-10-25' },
    //   { title: 'event 1', date: '2021-10-25' },
    //   { title: 'event 2', date: '2021-10-26' },
    //   {
    //     title: 'test',
    //     start: '2021-10-28',
    //     end: '2021-10-29',
    //   },
    // ],
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

  updateCalendar() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',

      selectable: true,
      dateClick: this.handleDateClick.bind(this), // bind is important!
      events: this.event,
      // [
      //   { title: 'event 1', date: '2021-10-25', backgroundColor: '#ff3fa2' },
      //   { title: 'event 1', date: '2021-10-25' },
      //   { title: 'event 1', date: '2021-10-25' },
      //   { title: 'event 2', date: '2021-10-26' },
      //   {
      //     title: 'test',
      //     start: '2021-10-28',
      //     end: '2021-10-29',
      //   },
      // ],
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
  }

  // toggleWeekends() {
  //   this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  // }
  handleDateClick(arg: any) {
    this.selectedDate = arg.dateStr;
    this.getConseillereEvent();
  }
  today: any;

  constructor(
    private atelierService: AtelierService,
    private route: ActivatedRoute
  ) {
    this.today = new Date(Date.now()).toISOString().split('T')[0];
    this.selectedDate = new Date(Date.now()).toISOString().split('T')[0];
    console.log(this.event);
    this.getConseillereEvent();
  }

  getConseillereEvent() {
    this.atelierService.getConseillereAtelier().subscribe((res: any) => {
      // { title: 'event 1', date: '2021-10-25' },
      //       conseillere: "61653da9094b84f0f7178cc8"
      // createdAt: "2021-10-15T14:06:17.840Z"
      // date: "2021-10-31T00:00:00.000Z"
      // hotesse:
      // createdAt: "2021-10-08T04:54:11.142Z"
      // email: "patricia@gmail.com"
      // nom: "Lema"
      // numero: "1234567"
      // postal: 12345
      // prenom: "Patricia"
      // role: "615c56de3a33edcd7b42a2ae"
      // status: true
      // updatedAt: "2021-10-08T04:54:47.776Z"
      // ville: "Paris"
      // _id: "615fcef378103d702d8f5a6f"
      // [[Prototype]]: Object
      // ouvert: true
      // place: 5
      // postal: 1234
      // status: "ligne"
      // theme: "Theme"
      // time: 14
      // updatedAt: "2021-10-15T14:06:17.840Z"
      // villeHotesse: "Douala"
      // __v: 0
      // _id: "61698ad9e35340e9624544d4"
      this.atelier = [];
      res.forEach((element: any) => {
        if (Date.parse(element.date) == Date.parse(this.selectedDate)) {
          this.atelier.push(element);
        }
      });
      console.log(this.atelier);
    });
  }

  ngOnInit(): void {
    this.route.snapshot.data['event'].forEach((element: any) => {
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
}
