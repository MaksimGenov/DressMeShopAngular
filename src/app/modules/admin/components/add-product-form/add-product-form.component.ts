import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../../../../models/Category';
import { Brand } from '../../../../models/Brand';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { ProductService } from '../../../../services/product-service/product.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';
import { Product } from 'src/app/models/Product';
import { forkJoin, Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Page } from 'src/app/models/Page';
import { SizeService } from 'src/app/services/size-service/size.service';
import { Size } from 'src/app/models/Size';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  brands: Brand[]
  categories: Category[]
  sizes: Size[]
  images: File[] = []
  imagesPreviewUrl: string[] = []
  form: FormGroup

  constructor(
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
    private productService: ProductService,
    private notificationService: NotificationService,
    private sizeService: SizeService
  ) {
    this.onSuccess = this.onSuccess.bind(this)
    this.onError = this.onError.bind(this)
  }

  ngOnInit() {
    forkJoin(this.loadBrands(), this.loadCategories(), this.loadSizes())
    .subscribe(([brands, categories, sizes]) => {
      this.brands = brands.body.content
      this.categories = categories.body.content
      this.sizes = sizes.body
      this.initForm()
    })
  }

  loadSizes(): Observable<HttpResponse<Size[]>>{
    return this.sizeService.getAll()
  }

  loadCategories(): Observable<HttpResponse<Page<Category>>> {
    return this.categoryService.getPage({})
  }

  loadBrands(): Observable<HttpResponse<Page<Brand>>> {
    return this.brandService.getPage({})
  }

  initForm(): void {
    console.log(this.categories)
    let categories = new FormGroup({})
    this.categories.forEach((c, i) => categories.setControl(c.name, new FormControl()))
    let sizes = new FormGroup({})
    this.sizes.forEach(s => sizes.setControl(s.name, new FormControl))

    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      brand: new FormControl(null, [Validators.required]),
      files: new FormControl(null, [Validators.required]),
      categories,
      sizes
    })
  }

  isFormControlInvalid(name: string) {
    return this.form.get(name).invalid
  }

  isFormControlTouched(name: string) {
    return this.form.get(name).touched
  }

  onSubmit() {
    let sizes = this.form.get("sizes").value
    sizes = Object.keys(sizes)
      .filter(key => sizes[key] !== null)
      .map(key => { return { size: key, quantity: sizes[key] } })
    
    let categories = this.form.get("categories").value
    categories = Object.keys(categories).filter(k => categories[k])

    let product = Object.assign({}, this.form.value)
    product.sizes = sizes
    product.categories = categories
    delete product.files
    
    this.productService.create(product, this.images)
      .subscribe(this.onSuccess, this.onError)
  }

  onSuccess(product: Product) {
    this.resetForm()
    this.notificationService.pop('success', 'Product created successfully!');
  }

  onError(error) {
    console.log(error)
    this.notificationService.pop('error', error.error)
  }

  resetForm() {
    this.form.reset();
    this.images = [];
    this.imagesPreviewUrl = [];
  }

  async onFileChange(event) {
    this.imagesPreviewUrl = []
    this.images = Array.from(event.target.files)
    this.imagesPreviewUrl = await Promise.all(this.images.map(this.imageService.generateImagePreviewUrl))
  }

}
