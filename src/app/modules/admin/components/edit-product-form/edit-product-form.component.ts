import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/Brand';
import { Category } from 'src/app/models/Category';
import { ProductService } from 'src/app/services/product-service/product.service';
import { BrandService } from 'src/app/services/brand-service/brand.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ImageService } from 'src/app/services/image-service/image.service';
import { Product } from 'src/app/models/Product';
import { forkJoin, Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Page } from 'src/app/models/Page';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  form: FormGroup
  availableBrands: Brand[]

  categoriesDropdownList: string[]
  selectedCategories: string[]
  availableCategories: Category[]

  imagesPreviewUrl: string[] = []
  images: File[] = []
  productId: string;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
  ) { }

  ngOnInit() {
    forkJoin([this.loadBrands(), this.loadCategories(),this.loadProduct()])
      .subscribe(([brands, categories, product]) => {
        this.availableBrands = brands.body.content
        this.categoriesDropdownList = categories.body.content.map(c => c.name)
        this.selectedCategories = product.body.categories.map(c => c.name)
        this.initForm(product.body)
      })
  }
  
  loadProduct(): Observable<HttpResponse<Product>> {
    this.productId = this.route.snapshot.params.id
    return this.productService.get(this.productId)
  }

  loadCategories(): Observable<HttpResponse<Page<Category>>>  {
    return this.categoryService.getPage({})
  }

  loadBrands(): Observable<HttpResponse<Page<Brand>>> {
    return this.brandService.getPage({})
  }

  initForm(product: Product): void {
    this.form = new FormGroup({
      model: new FormControl(product.model, Validators.required),
      description: new FormControl(product.description, Validators.required),
      brand: new FormControl(product.brand.name, Validators.required),
      // categories: new FormControl(product.categories.map(c => c.name), Validators.required),
      color: new FormControl(product.color, Validators.required),
      price: new FormControl(product.price, Validators.required),
    })
  }

  isFormControlInvalid(name: string) {
    return this.form.get(name).invalid
  }

  isFormControlTouched(name: string) {
    return this.form.get(name).touched
  }

  async onFileChange(event) {
    this.imagesPreviewUrl = []
    this.images = Array.from(event.target.files)
    this.imagesPreviewUrl = await Promise.all(this.images.map(image => this.imageService.generateImagePreviewUrl(image)))
  }

  onCategorySelect(categories) {
    console.log(categories)
  }

  onSubmit(event) {
    let product = Object.assign({}, this.form.value)
    product['id'] = this.productId

    this.productService.edit(product, this.images)
  }
}
