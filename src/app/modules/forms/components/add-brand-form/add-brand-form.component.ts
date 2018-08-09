import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { ImageService } from '../../../../services/image-service/image.service';

@Component({
  selector: 'app-add-brand-form',
  templateUrl: './add-brand-form.component.html',
  styleUrls: ['./add-brand-form.component.css']
})
export class AddBrandFormComponent implements OnInit {
  image: File
  imagePreviewUrl: string
  addBrandForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(null),
    description: new FormControl('')
  })
  constructor(private brandService: BrandService, private imageService: ImageService) { }

  ngOnInit() { }

  onSubmit(event) {
    let name: string = this.addBrandForm.get('name').value
    let description: string = this.addBrandForm.get('description').value
    this.brandService.addBrand(name, description, this.image)
    .subscribe(brand => {
      this.image = null
      this.imagePreviewUrl = null
      this.addBrandForm.reset()
    })
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }
}