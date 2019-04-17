import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SizeService } from 'src/app/services/size-service/size.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { Size } from 'src/app/models/Size';

@Component({
  selector: 'app-add-size-form',
  templateUrl: './add-size-form.component.html',
  styleUrls: ['./add-size-form.component.css']
})
export class AddSizeFormComponent implements OnInit {
  size: FormControl

  constructor(private sizeService: SizeService, private notificationService: NotificationService) {
    this.onSuccess = this.onSuccess.bind(this)
    this.onError = this.onError.bind(this)
  }

  ngOnInit() {
    this.size = new FormControl()
  }

  onSubmit() {
    let size = {name: this.size.value}
    this.sizeService.create(size).subscribe(this.onSuccess, this.onError)
  }

  onSuccess(size: Size) {
    this.size.reset()
    this.notificationService.success("Size: " + size.name + " added successuflly.")
  }

  onError(error) {
    this.notificationService.error(error.error)
  }
}
