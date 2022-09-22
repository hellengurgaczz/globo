import { Guid } from 'guid-typescript';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs: Job[] = [];

  constructor(private http: HttpClient) { }

  private baseUrlJob = "http://localhost:3001/jobs";

  create(job: Job) : Observable<Job> {
    return this.http.post<Job>(this.baseUrlJob, job);
  }

  list(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrlJob);
  }

  delete(id: String) {
    this.list().subscribe(jobs => {
      this.jobs = jobs;
      console.log(jobs)
      this.jobs.forEach(job => {
        if(job.id_link == id) {
          console.log(this.http.delete(`${this.baseUrlJob}/${job.id}`).subscribe())
        }
      });
    })

  }
}
