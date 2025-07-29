import { Component } from '@angular/core';
import { CountdownConfig, CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-dainjung',
  templateUrl: './dainjung.component.html',
  styleUrl: './dainjung.component.scss',
  standalone: false
})
export class DainjungComponent {

  // This date represents August 13th, 2025 at 7:00 PM
  // Note: JavaScript months are 0-based, so month 7 is actually August
  date = new Date(2025, 7, 13, 19, 0, 0); // Fixed month to be August (7)
  date2 = new Date("2025-08-13T19:00:00");
  message = "Time left before wine : "
  isWineEmpty = false;
  daysLeft = Math.floor((this.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  countdownTime: CountdownConfig = {
    leftTime: Math.floor((this.date.getTime() - Date.now()) / 1000),
    format: 'HH:mm:ss',
    stopTime: this.date.getTime()
  };


  emptyWine() {
    this.isWineEmpty = true;
  }
  
}
