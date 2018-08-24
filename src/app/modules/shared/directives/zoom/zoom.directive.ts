import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input() scaleIn: number
  @Input() scaleOut: number
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeScale(this.scaleIn || 1.1)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeScale(this.scaleOut || 1)
  }

  changeScale(value: number) {
    this.el.nativeElement.style.transform = `scale(${value})`
  }
}
