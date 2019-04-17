import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent {
  @Input() links: Link[]

  constructor() { }

}
