import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1)'
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.transform = 'scale(1)'
  }
}
