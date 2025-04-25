import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experience = "freelance"

  constructor() { }

  ngOnInit(): void {
    this.displayExperience(this.experience)
  }

  displayExperience(id:string){
    if(this.experience){
      this.hideExperience(this.experience)
    }
    this.experience = id
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
  }

}
