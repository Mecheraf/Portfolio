import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  gazel = true;

  constructor() { }

  ngOnInit(): void {
  }

  displayExperience(id:string) {
    if(this.gazel==true){
      this.gazel = false;
      const gazelBox = document.getElementById("gazel");
      if(gazelBox){
        gazelBox.style.transform = 'translateX(100vw)'
      }
    }
    const experienceBox = document.getElementById(id); 
    if(experienceBox){
      experienceBox.style.transform = 'translateX(0)'
    }
    
  }

  hideExperience(id:string) {
    const experienceBox = document.getElementById(id); 
    if(experienceBox){
      experienceBox.style.transform = 'translateX(100vw)'
    }
    
    console.log("out")
  }

}
