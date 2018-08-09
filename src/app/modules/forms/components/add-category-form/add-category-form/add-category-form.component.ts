import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ImageService } from '../../../../../services/image-service/image.service';
import { CategoryService } from '../../../../../services/category-service/category.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent implements OnInit {
  image: File
  imagePreviewUrl: string
  addCategoryForm = new FormGroup({
    name: new FormControl(''),
    file: new FormControl(null)
  })
  constructor(private categoryService: CategoryService, private imageService: ImageService) { }

  ngOnInit() { }

  get name() { return this.addCategoryForm.get('name') }

  get file() { return this.addCategoryForm.get('image') }

  onSubmit(event) {
    let name: string = this.name.value
    this.categoryService.createCategory(name, this.image)
    .subscribe(brand => {
      this.image = null
      this.imagePreviewUrl = null
      this.addCategoryForm.reset()
    })
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }
}
