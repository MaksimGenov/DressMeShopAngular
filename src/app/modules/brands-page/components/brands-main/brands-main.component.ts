import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../models/Link';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { LinkGeneratorService } from '../../../../services/link-generator/link-generator.service';
@Component({
  selector: 'app-brands-main',
  templateUrl: './brands-main.component.html',
  styleUrls: ['./brands-main.component.css']
})
export class BrandsMainComponent implements OnInit {
  isLoading: Boolean = true
  navLinks: Link[]

  constructor(
    private brandService: BrandService,
    private linkGeneratorService: LinkGeneratorService
  ) { }

  ngOnInit() {
    this.brandService.getAllBrands().subscribe(brands => {
      this.navLinks = brands.map(brand => {
        return this.linkGeneratorService.generateLink(brand, "", "/products")
      })
      this.isLoading = false
    })
  }

}
