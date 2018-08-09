import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../../models/Link';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {
  @Input() navLinks: Link[]
  constructor() { }

  ngOnInit() {
  }

}
