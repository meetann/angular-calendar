import { Component, OnInit } from '@angular/core';
import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid'

@Component({
  selector: 'app-calendar-omponent',
  templateUrl: './calendar-omponent.component.html',
  styleUrls: ['./calendar-omponent.component.css']
})
export class CalendarOmponentComponent implements OnInit {
  calendarPlugins=[dayGridPlugin]

  constructor() { }

  ngOnInit() {
  }

}
