import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DressMeShop';
  mobile: boolean = false
  isMobileSearch: boolean = false
  isSearchPanelVisiable: boolean

  ngOnInit(): void {
    this.isSearchPanelVisiable = false
  }

  toogleSearchPanel() {
    this.isSearchPanelVisiable = !this.isSearchPanelVisiable
  }
}
