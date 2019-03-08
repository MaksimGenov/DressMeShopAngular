import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.css']
})
export class NavDropdownComponent implements OnInit {
  @Input() link: Link
  @Input() toogleMenu: Function
  isOpen:boolean

  constructor() { }

  ngOnInit() {
    this.isOpen = false
  }

  toogle() {
    this.isOpen = !this.isOpen
  }
}
