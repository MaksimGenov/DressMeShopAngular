import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  categories: string[] = ['shoes', 'socks', 't-shirts', 'basketball', 'aaaaaaaaaaaa', 'bbbbbbbbbbb'
  , 'ccccccccccccccccccccccccccc']
  sizes: string[] = ['8','9','10','11','12','13','14','15','16','s','m','l','XL','2XL','3XL']
  form: FormGroup
  categoriesGroup: FormArray
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.categoriesGroup = new FormArray([])
    let sizes = new FormGroup({})
    this.sizes.forEach(s => sizes.setControl(s, new FormControl))
    this.categories.forEach((c, index) => this.categoriesGroup.setControl(index, new FormControl()))
    this.form = new FormGroup({
      name: new FormControl(),
      categories: this.categoriesGroup,
      sizes
    })
  }

  onSubmit() {
    let product = {
      brand: "nike",
      model: "zero",
      price: "123",
      categories: ["shoes"],
      sizes:null,
      description: "nike is nike",
      color: "red"
    }

    let sizes = this.form.get("sizes").value
    sizes = Object.keys(sizes)
    .filter(key => sizes[key] !== null)
    .map(key => {return {size: key, quantity: sizes[key]}})
    product.sizes = JSON.stringify(sizes)
    console.log(JSON.stringify(product))

    this.productService.create(product).subscribe()
  }
}
