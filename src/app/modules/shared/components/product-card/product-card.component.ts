import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/Product';
import { zoom } from '../../animations/zoom/zoom.animation';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [zoom(1, 1.1)]
})

export class ProductCardComponent {
  @Input() product: Product
  private zoomed: string = 'out'
  constructor() { }

  toogleZoom() {
    this.zoomed = this.zoomed === 'in' ? 'out' : 'in'
  }
}
