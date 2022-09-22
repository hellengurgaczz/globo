import { LinkService } from './../../services/link.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Link } from 'src/app/models/link';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-delete-link',
  templateUrl: './delete-link.component.html',
  styleUrls: ['./delete-link.component.css']
})
export class DeleteLinkComponent implements OnInit {

  link: Link = new Link();

  constructor(private linkService: LinkService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");

    if(str) {
      this.linkService.delete(str).subscribe(() => {
        this.router.navigate([""])
      });
    }
  }

}