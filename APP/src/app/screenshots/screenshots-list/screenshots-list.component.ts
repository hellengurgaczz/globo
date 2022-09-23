import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'src/app/models/link';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-screenshots-list',
  templateUrl: './screenshots-list.component.html',
  styleUrls: ['./screenshots-list.component.css']
})
export class ScreenshotsListComponent implements OnInit {

  links: Link[] = [];
  
  constructor(private linkService: LinkService, private router: Router) { }

  ngOnInit(): void {
    this.linkService.list().subscribe(links => {
      this.links = links;
    });

  }

}
