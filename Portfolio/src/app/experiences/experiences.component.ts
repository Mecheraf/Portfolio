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

  displayExperience(id:string) {
    const experienceBox = document.getElementById(id); 
    if(experienceBox){
      experienceBox.style.transform = 'translateX(0)'
    }
    console.log("in")
  }

  hideExperience(id:string) {
    const experienceBox = document.getElementById(id); 
    if(experienceBox){
      experienceBox.style.transform = 'translateX(100vw)'
    }
    console.log("out")
  }

}
