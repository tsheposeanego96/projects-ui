import { Component, OnInit } from '@angular/core';
import { ProjectsService } from "../../services/projects.service";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  projects;
  
  constructor(private projectServices: ProjectsService) { }

  ngOnInit() {
    this.projectServices.getProjects().subscribe(
      resp => {
        console.log(resp);
        this.projects =  resp.projects;
        console.log(this.projects);
      }
    )
  }

}
