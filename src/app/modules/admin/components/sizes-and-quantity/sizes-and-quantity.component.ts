import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SizeService } from 'src/app/services/size-service/size.service';
import { compareSizes } from 'src/app/utils/comparators/sizeComparator';

@Component({
  selector: 'app-sizes-and-quantity',
  templateUrl: './sizes-and-quantity.component.html',
  styleUrls: ['./sizes-and-quantity.component.css']
})
export class SizesAndQuantityComponent implements OnInit {
  @Input() formGroup: FormGroup
  sizes: string[]
  constructor(private sizeService: SizeService) { }

  ngOnInit() {
    this.sizeService.getAll().subscribe(response => {
      this.sizes = response.body.map(s => s.name).sort(compareSizes)
      this.initFormGroup()
    })
  }

  initFormGroup(): void {
    this.sizes.forEach(size => {
      if (!this.formGroup.get(size))
        this.formGroup.setControl(size, new FormControl)
    })
  }

}
