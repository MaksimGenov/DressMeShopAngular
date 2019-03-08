import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent {
  @Input() links: Link[]
  @Input() toogleMenu: Function

  constructor() { }
}
