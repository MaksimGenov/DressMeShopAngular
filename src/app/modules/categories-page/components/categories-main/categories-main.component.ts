import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category-service/category.service';
import { Link } from '../../../../models/Link';
import { LinkGeneratorService } from '../../../../services/link-generator/link-generator.service';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.css']
})
export class CategoriesMainComponent implements OnInit {
  navLinks: Link[]
  constructor(
    private categoryService: CategoryService,
    private linkGeneratorService: LinkGeneratorService
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.navLinks = categories.map(category => {
        return this.linkGeneratorService.generateLink(category, "", "/products")
      })
    })
  }

}
