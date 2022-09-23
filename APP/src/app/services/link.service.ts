import { JobService } from './job.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../models/link';
import { Job } from '../models/job';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient, private jobService: JobService) { }

  private baseUrlLink = "http://localhost:3001/links";


  list(): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.baseUrlLink}?_sort=date&_order=desc`);
  }

  create(link: Link) : Observable<Link> {
    link.id = Guid.create().toString();
    let response = this.http.post<Link>(this.baseUrlLink, link);
    let job = new Job();
    job.id = Guid.create().toString();
    job.url = link.url;
    job.id_link = link.id;
    this.jobService.create(job).subscribe();
    return response;
  }

  delete(id: String) : Observable<any> {
    this.jobService.delete(id);
    return this.http.delete(`${this.baseUrlLink}/${id}`);
  }
  
}