import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { Category } from 'src/app/models/Category';
import { SizeService } from 'src/app/services/size-service/size.service';
import { forkJoin, Observable } from 'rxjs';
import { BrandService } from 'src/app/services/brand-service/brand.service';
import { HttpResponse } from '@angular/common/http';
import { Brand } from 'src/app/models/Brand';
import { Size } from 'src/app/models/Size';
import { Page } from 'src/app/models/Page';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  form: FormGroup;
  categoriesDropdownList: String[]
  selectedCategories: string[] = []
  categoryDropdownSettings = {}
  sizeDropdownSettings = {}
  sizesDropdownList: string[]
  selctedSizes: string[] = []
  brandDropDownList: string[]
  brandDropdownSettings = {}
  selectedBrand: string;

  constructor(
    private router: Router,
    private categorySerice: CategoryService,
    private sizeService: SizeService,
    private brandService: BrandService) { }

  ngOnInit() {
    forkJoin(this.loadBrands(), this.loadCategories(), this.loadSizes())
    .subscribe(([brands, categories, sizes]) => {
      this.brandDropDownList = brands.body.content.map(brand => brand.name)
      this.categoriesDropdownList = categories.body.content.map(category => category.name)
      this.sizesDropdownList = sizes.body.map(size => size.name)
    }) 
    this.initForm()
    this.setMultiselectSettings()
  }

  loadBrands(): Observable<HttpResponse<Page<Brand>>>{
    return this.brandService.getPage({})
  }

  loadSizes(): Observable<HttpResponse<Size[]>> {
    return this.sizeService.getAll()
  }

  loadCategories(): Observable<HttpResponse<Page<Category>>> {
    return this.categorySerice.getPage({})
  }

  setMultiselectSettings(): void {
    this.categoryDropdownSettings = {
      itemsShowLimit: 3,
      placeholder: "Select categories..."
    } 

    this.sizeDropdownSettings = {
      itemsShowLimit: 5,
      placeholder: "Select sizes..."
    } 

    this.brandDropdownSettings = {
      allowSingleSelection: true,
      placeholder: "Select brand..."
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      brand: new FormControl(),
      minPrice: new FormControl(),
      maxPrice: new FormControl()
    })
  }

  onSubmit(): void {
    let params = this.form.value
    params.categories = this.selectedCategories
    params.sizes = this.selctedSizes
    params.brand = this.selectedBrand
    this.router.navigate(['/products'], {queryParams: params})
    this.form.reset()
    this.sizesDropdownList = [...this.sizesDropdownList]
    this.categoriesDropdownList = [...this.categoriesDropdownList]
  }

  onCategorySelect(categories: string[]): void {
    this.selectedCategories = categories
  }

  onSizeSelect(sizes: string[]): void {
      this.selctedSizes = sizes
  }

  onBrandSelect(brands: string[]) {
    this.selectedBrand = brands[0]
  }

  resetForm() {

  }
}
