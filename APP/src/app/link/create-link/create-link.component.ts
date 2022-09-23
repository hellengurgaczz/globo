
import { LinkService } from './../../services/link.service';
import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css']
})
export class CreateLinkComponent implements OnInit {

  link: Link = new Link();

  constructor(private linkservice: LinkService, private router: Router) { }

  ngOnInit(): void {
  }

  createLink() {
    this.linkservice.create(this.link).subscribe(() => {
      location.reload()
    });
  }

}
