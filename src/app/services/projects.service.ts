import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { Project } from "../models/project/project.model";
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseUrl = "http://localhost:3000/dev/";

  constructor(private http: HttpClient) {
   }

  getProjects(): Observable<any> {
    return this.http.get<Project>(`${this.baseUrl}projects`);
  }

}
