import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../../../../models/Brand';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent implements OnInit {
  @Input() brand: Brand
  constructor() { }

  ngOnInit() {
  }

}
