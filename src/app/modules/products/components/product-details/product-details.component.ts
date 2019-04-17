import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product-service/product.service';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { Product } from 'src/app/models/Product';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { SizeQuantity } from 'src/app/models/SizeQuantity';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product
  form: FormGroup
  selectedSize: string
  sizeDropdownList: string[]
  sizeDropdownSettings: Object

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private location: Location,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.setSizeDropdownSettings()
    this.initForm()
    this.route.params.subscribe(params => {
      const productId = params.id
      this.loadProduct(productId)
    })
  }

  setSizeDropdownSettings(): any {
    this.sizeDropdownSettings = {
      placeholder: "Select size...",
      allowSingleSelection: true
    }
  }

  loadProduct(id: any) {
    this.productService.get(id).subscribe(response => {
      this.product = response.body
      this.setSizeDropdownList(this.product.sizes)
    })
  }

  setSizeDropdownList(sizesQuantity: SizeQuantity[]) {
    this.sizeDropdownList = sizesQuantity
      .map(sizeQty => sizeQty.size.name)
      .sort((s1, s2) => Number(s1) >= Number(s2) ? 1 : -1)
  } 

  initForm() {
    this.form = new FormGroup({
      quantity: new FormControl(1)
    })
  }

  deleteProduct() {
    this.productService.delete(this.product.id)
    .subscribe(
      response => {
        this.location.back()
        this.notificationService.success('Product delete successfully!')
      },
      error => this.notificationService.error(error.error)
    )
  }

  addToCart() {
    let orderItem = this.form.value
    orderItem.size = this.selectedSize
    orderItem.productId = this.product.id
    this.authService.addProductToCart(orderItem)
  }

  onSizeSelect(sizes: string[]) {
    this.selectedSize = sizes[0]
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin()
  }

  get isLogged(): boolean {
    return this.authService.isLogged()
  }


}
