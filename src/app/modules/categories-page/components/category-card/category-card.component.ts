import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Category } from '../../../../models/Category';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { CategoryService } from '../../../../services/category-service/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category: Category

  constructor(
    private authService: AuthService,
    private catagoryService: CategoryService,
    private elementRef: ElementRef,
  ) { }

  get isAdmin(): boolean {
    return this.authService.isAdmin()
  }

  deleteCategory() {
    this.catagoryService.delete(this.category._id, this.elementRef)
  }
}
