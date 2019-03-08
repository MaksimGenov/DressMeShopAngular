import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent implements OnInit {
  @Input() links: Link[]
  @Input() toogleMenu: Function

  constructor() { }

  ngOnInit() {
  }

  toogleDropdown(event) {
    console.log(event)
  }
}
