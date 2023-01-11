import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  ddm = false;
  gazel = false;
  oishi = false;
  nagano = false;
  constructor() { }

  ngOnInit(): void {
  }

}
