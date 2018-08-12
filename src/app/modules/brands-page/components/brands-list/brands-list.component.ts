import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../../../../models/Brand';
import { BrandService } from '../../../../services/brand-service/brand.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {
  private isLoading: Boolean = true
  private brands: Brand[]
  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getAllBrands().subscribe(brands => {
      this.brands = brands
      this.isLoading = false
    })
  }

}
