import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  data: string[] = ["shoes", "hats", "test","shoes", "hats", "test"]
  settings: {}

  onCategorySelect(event) {
    console.log(event)
  }
}
