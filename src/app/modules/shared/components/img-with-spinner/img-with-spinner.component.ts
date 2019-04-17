import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img-with-spinner',
  templateUrl: './img-with-spinner.component.html',
  styleUrls: ['./img-with-spinner.component.css']
})
export class ImgWithSpinnerComponent implements OnChanges {
  @Input() src: string
  @Input() spinnerWidth: string
  @Input() spinnerHeight: string
  @Input() isLoading: boolean = true

  ngOnChanges(changes: SimpleChanges) {
    if (changes.src.previousValue !== changes.src.currentValue)
      this.isLoading = true;
  }

  onLoad() {
    this.isLoading = false
  }

  onError() {
    this.src = "/assets/no-image-icon-23494.png"
  }
}
