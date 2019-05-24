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
    date.setDate(date.getDate() + 5);
    const options = { calendarId: cal.id };
    this.calendar.createEventInteractivelyWithOptions(
        'Rdv avec l\'indic', 'Pur malt, 4/5.5', 'Du lait & du sucre', date, date, options).then(() => {});
  }


}
