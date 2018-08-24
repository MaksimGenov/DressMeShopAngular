import { Component, Input, ElementRef } from '@angular/core';
import { Brand } from '../../../../models/Brand';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { BrandService } from '../../../../services/brand-service/brand.service';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent {
  @Input() brand: Brand
  constructor(
    private brandService: BrandService,
    private authService: AuthService,
    private elementRef: ElementRef
  ) { }

  get isAdmin() {
    return this.authService.isAdmin()
  }

  deleteBrand() {
    this.brandService.delete(this.brand._id, this.elementRef)
  }
}
