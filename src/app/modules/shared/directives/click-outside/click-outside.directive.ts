import { Directive, ElementRef, HostListener, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[app-click-outside]'
})
export class ClickOutsideDirective implements OnInit {
  @Output("app-click-outside") clickOutside: EventEmitter<Event> = new EventEmitter()

  constructor(private el: ElementRef) {
    this.onBodyClick = this.onBodyClick.bind(this)
  }

  ngOnInit(): void {
    this._initOnBodyClick()
  }

  _initOnBodyClick() {
    setTimeout(() => document.addEventListener("click", this.onBodyClick), 10)
  }

  onBodyClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.clickOutside.emit()
      document.removeEventListener("click", this.onBodyClick)
    }
  }
}
