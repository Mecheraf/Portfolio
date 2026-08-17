import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayMail() {
    const displaymail = document.getElementById("email"); 
    if(displaymail){
      displaymail.style.display = 'block'
    }
  }

}
