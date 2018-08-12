import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent implements OnInit {
  @Input() navLinks: Link[]
  constructor() { }

  ngOnInit() {
  }

}
