import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../../models/Image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() 
  images: Image[]
  currentSlide: number = 0
  constructor() { }

  next() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide++
    } else {
      this.currentSlide = 0
    }
  }

  prev() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.images.length - 1
    } else {
      this.currentSlide--
    }
  }
}
