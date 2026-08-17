import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['./trainings.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TrainingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
