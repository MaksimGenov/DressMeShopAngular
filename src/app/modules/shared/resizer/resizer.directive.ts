import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResizer]'
})
export class ResizerDirective implements OnInit {
  @Input() width: string
  @Input() height: string

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.width = this.width
    this.el.nativeElement.style.height = this.height
  }
}
