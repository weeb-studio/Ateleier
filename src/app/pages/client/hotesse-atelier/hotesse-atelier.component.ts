import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-hotesse-atelier',
  templateUrl: './hotesse-atelier.component.html',
  styleUrls: ['./hotesse-atelier.component.scss'],
})
export class HotesseAtelierComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' },
    ],
    headerToolbar: {
      left: 'title',
      right: 'prev,next',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
