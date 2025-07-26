import { Component } from '@angular/core';
import { CountdownConfig, CountdownModule } from 'ngx-countdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annisrayanbourefis',
  templateUrl: './annisrayanbourefis.component.html',
  styleUrl: './annisrayanbourefis.component.scss',
  standalone: false
})


export class AnnisrayanbourefisComponent {

  ngOnInit() {
    console.log(Date.now());
    console.log(this.date);
  }

  // This date represents October 4th, 2025 at 6:00 PM
  // Note: JavaScript months are 0-based, so month 9 is actually October
  date = new Date(2025, 9, 4, 18, 0, 0); // Fixed month to be October (9)
  date2 = new Date("2025-10-04T18:00:00");
  message = "Time left before a beer : "

  daysLeft = Math.floor((this.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  countdownTime: CountdownConfig = {
    leftTime: Math.floor((this.date.getTime() - Date.now()) / 1000),
    format: 'HH:mm:ss',
    stopTime: this.date.getTime()
  };

  onCountdownEvent(event: any) {
    console.log(event);
  }
}
