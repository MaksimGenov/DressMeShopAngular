import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/Brand';
import { ProductService } from 'src/app/services/product-service/product.service';
import { BrandService } from 'src/app/services/brand-service/brand.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ImageService } from 'src/app/services/image-service/image.service';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  form: FormGroup
  availableBrands$: Observable<Brand[]>
  categoriesDropdownList$: Observable<string[]>
  selectedCategories: string[]
  imagesPreviewUrl: Promise<string>[] = []
  images: File[] = []
  product: Product
  selectedImagesId: string[] = []
  tabs: Params
  activeTab: string;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
  ) { }

  ngOnInit() {
    this.loadProduct().subscribe(product => {
      this.product = product.body
      this.initForm(product.body)
      this.selectedCategories = product.body.categories.map(c => c.name)
    })
    this.loadCategories()
    this.loadBrands()
    this.tabs = {'common': 'common', 'addImages': 'add images', 'removeImages': 'remove images'}
    this.activeTab = this.tabs.common
  }
  
  loadProduct(): Observable<HttpResponse<Product>> {
    let productId = this.route.snapshot.params.id
    return this.productService.get(productId)
  }

  loadCategories() {
    this.categoriesDropdownList$ = this.categoryService.getPage({})
      .pipe(map(response => response.body.content.map(category => category.name)))
  }

  loadBrands() {
    this.availableBrands$ = this.brandService.getPage({}).pipe(map(obj => obj.body.content))
  }

  initForm(product: Product): void {
    let sizes = new FormGroup({})
    product.sizes.forEach(sizeQty => sizes.setControl(sizeQty.size.name, new FormControl(sizeQty.quantity)))
    this.form = new FormGroup({
      model: new FormControl(product.model, Validators.required),
      description: new FormControl(product.description, Validators.required),
      brand: new FormControl(product.brand.name, Validators.required),
      color: new FormControl(product.color, Validators.required),
      price: new FormControl(product.price, Validators.required),
      sizes
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
    this.imagesPreviewUrl = this.images.map(image => this.imageService.generateImagePreviewUrl(image))
  }

  onCategorySelect(categories) {
    this.selectedCategories = categories
  }

  onSubmit(event) {
    let product = Object.assign({}, this.form.value)
    product.id = this.product.id

    this.productService.edit(product, this.images)
  }

  deleteImages() {
    this.productService.deleteImages(this.product.id, this.selectedImagesId)
      .subscribe(response => 
        this.product.images = this.product.images.filter(image => !this.selectedImagesId.includes(image.id))
      )
  }

  onImageSelect(id: string) {
    if(this.selectedImagesId.includes(id))
      this.selectedImagesId.splice(this.selectedImagesId.indexOf(id), 1)
    else
      this.selectedImagesId.push(id)
  }

  switchActiveTab(tab: string) {
    this.activeTab = tab
  }
}
