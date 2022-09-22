import { LinkService } from './../../services/link.service';
import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.css']
})
export class ListLinkComponent implements OnInit {

  links: Link[] = [];

  constructor(private linkService: LinkService, private router: Router) { }

  ngOnInit(): void {
    this.linkService.list().subscribe(links => {
      this.links = links;
    });
  }

}
