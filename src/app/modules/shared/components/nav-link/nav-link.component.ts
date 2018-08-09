import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {
  @Input() navLink: Link
  constructor() { }

  ngOnInit() {
  }

}
