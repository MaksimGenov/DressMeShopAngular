import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product-service/product.service';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { Product } from 'src/app/models/Product';
import { Form, FormGroup, FormControl } from '@angular/forms';

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
  ) { }

  ngOnInit() {
    this.initSizeDropdownSettings()
    this.initForm()
    this.route.params.subscribe(params => {
      const productId = params.id
      this.loadProduct(productId)
    })
  }

  initSizeDropdownSettings(): any {
    this.sizeDropdownSettings = {
      placeholder: "Select size...",
      allowSingleSelection: true
    }
  }

  initForm() {
    this.form = new FormGroup({
      quantity: new FormControl(1)
    })
  }

  loadProduct(id: any) {
    this.productService.get(id).subscribe(response => {
      this.product = response.body
      this.sizeDropdownList = this.product.sizes
        .map(sizeQty => sizeQty.size.name)
        .sort((s1,s2) => Number(s1) >= Number(s2) ? 1 :-1)
    })
  }

  deleteProduct() {
    this.productService.delete(this.product.id)
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
