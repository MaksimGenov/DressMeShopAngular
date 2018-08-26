import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';
import { FormControl, FormGroup, Validators } from '../../../../../../node_modules/@angular/forms';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.css']
})
export class EditCategoryFormComponent implements OnInit {
  image: File
  imagePreviewUrl: string
  categoryId: string
  form: FormGroup

  constructor(
    private categoryService: CategoryService,
    private imageService: ImageService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.id
      this.categoryService.getById(this.categoryId)
        .subscribe(category => {
          this.form = new FormGroup({
            name: new FormControl(category.name, Validators.required),
            file: new FormControl(null),
          })
        })
    })
  }

  get name() { return this.form.get('name') }

  get file() { return this.form.get('file') }

  onSubmit() {
    let name: string = this.name.value
    this.categoryService.edit(this.categoryId, name, this.image)
  }
}
