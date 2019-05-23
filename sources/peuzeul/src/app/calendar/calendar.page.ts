import { Component,  OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  calendars = [];
  constructor(
      private calendar: Calendar,
  ) {
    this.calendar.listCalendars().then(data => {
      this.calendars = data;
    });
  }

  addEvent(cal) {
    const date = new Date();
    const options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15};

    this.calendar.createEventInteractivelyWithOptions('My new event', 'Paris', 'Some special notes', date, date, options).then(() => {});
  }


}
