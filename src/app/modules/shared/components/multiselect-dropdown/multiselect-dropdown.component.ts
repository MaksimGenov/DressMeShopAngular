import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit, OnChanges {
  @Input() data: string[]
  @Input() settings: any
  @Input() selectedItems: string[] = []
  @Output() update: EventEmitter<string[]>
  isDropdownOpen: boolean
  dropdownList: string[]
  areAllItemsSelected: boolean
  
  constructor() {
    this.update = new EventEmitter()
  }

  ngOnInit(): void {
    this.isDropdownOpen = false
    this.areAllItemsSelected = false
    this.initSetting()
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.data && changes.data.currentValue)
      this.dropdownList = Array.from(changes.data.currentValue) //[...this.data]
    else
      this.dropdownList = []
    this.areAllItemsSelected = false
  }  

  initSetting() {
    let defaultSettings = {
      itemsShowLimit: Number.MAX_SAFE_INTEGER,
      placeholder: "Select...",
      allowSingleSelection: false
    }

    this.settings = Object.assign(defaultSettings, this.settings)
  }

  updateSelectedItems() {
    if (typeof this.selectedItems !== "undefined")
      return

    this.selectedItems = []
  }

  onOpen() {
    this.isDropdownOpen = true
  }
  
  onClickOutside(event) {
    this.isDropdownOpen = false
  }

  onItemSelect(event) {
    if (this.settings.allowSingleSelection)
      this.selectedItems = []
    if(event.target.checked)
      this.addItem(event.target.value)
    else 
      this.removeItem(event.target.value)
  }

  onSelectAllItems(event) {
    if(event.target.checked){
      this.selectedItems = [...this.data]
      this.areAllItemsSelected = true
    }
    else {
      this.selectedItems = []
      this.areAllItemsSelected = false
    }
    this.isDropdownOpen = false
    this.emitChanges()
  }

  onSerach(event) {
    let value = event.target.value
    this.dropdownList = [...this.data]
    this.dropdownList = this.dropdownList.filter(item => item.includes(value))
  }

  removeItem(item) {
    let index = this.selectedItems.indexOf(item)
    this.selectedItems.splice(index, 1)
    this.areAllItemsSelected = false
    this.emitChanges()
  }

  addItem(item) {
    this.selectedItems.push(item)
    this.emitChanges()
  }

  emitChanges() {
    this.update.emit(this.selectedItems)
  }

  get selectedItemsToShow():string[] {
    return this.selectedItems.slice(0, this.settings.itemsShowLimit)
  }
}
