import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../../../services/category-service/category.service';
import { Category } from '../../../../models/Category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  isLoading: boolean
  categories: Category[]
  categoriesTotalCount: number
  categoriesPerPage: number = 10

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.deleteCategory = this.deleteCategory.bind(this)
    this.loadCategories = this.loadCategories.bind(this)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.loadCategories(queryParams)
    })
  }

  private loadCategories(queryParams: Params) {
    this.isLoading = true
    this.categoryService.getPage(this.generateSerchParams(queryParams))
      .subscribe(response => {
        this.categories = response.body.content
        this.categoriesTotalCount = response.body.totalElements
        this.isLoading = false
      })
  }

  private generateSerchParams(queryParams: Params): Object {
    let searchParams = Object.assign({}, queryParams)

    if (typeof queryParams.page === 'undefined')
      searchParams.page = 1
    if (typeof queryParams.pageSize === 'undefined')
      searchParams.pageSize = this.categoriesPerPage

    return searchParams
  }

  deleteCategory(id: string) {
    this.categoryService.delete(id, this.loadCategories)
  }
}
