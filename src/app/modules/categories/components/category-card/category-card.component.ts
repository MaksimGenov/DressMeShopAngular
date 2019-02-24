import { Component, Input, ElementRef } from '@angular/core';
import { Category } from '../../../../models/Category';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { CategoryService } from '../../../../services/category-service/category.service';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category: Category
  @Input() deleteCategory: Function
  isLoadingImg = true

  constructor(
    private authService: AuthService,
    private catagoryService: CategoryService,
    private elementRef: ElementRef
  ) { }

  get isAdmin(): boolean {
    return this.authService.isAdmin()
  }
}
