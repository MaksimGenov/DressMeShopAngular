import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {
  private isSelected: Boolean = false
  constructor(private el: ElementRef) {
  }

  @HostListener('click') onClick() {
    if (this.isSelected) {
      this.el.nativeElement.style.backgroundColor = ''
      this.isSelected = !this.isSelected
    } else {
      this.el.nativeElement.style.backgroundColor = 'yellow'
      this.isSelected = !this.isSelected
    }
  }
}
