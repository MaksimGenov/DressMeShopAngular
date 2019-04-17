import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../../../models/Brand';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent {
  @Input() brand: Brand
  @Output() delete: EventEmitter<string>
  constructor(
    private brandService: BrandService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.delete = new EventEmitter<string>()
   }

  get isAdmin() {
    return this.authService.isAdmin()
  }

  onDelete() {
    this.brandService.delete(this.brand.id)
    .subscribe(response => {
      this.delete.emit(this.brand.id)
      this.notificationService.success("Brand: " + this.brand.name + " and all of it's products deleted successfully!")
    },
    error => this.notificationService.error(error.error)
    )
  }
}

/*
() => {
        this.elementRef.nativeElement.parentElement.removeChild(element.nativeElement)
        this.notificationService.pop('success', "Brand and all of it's products deleted successfully!")
      },
      error => this.notificationService.pop('error', error.error)
*/