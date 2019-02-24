import { FileCollection } from "./FileCollection";
import { Injectable } from "@angular/core";

@Injectable()
export class FormDataBuilder {

  generate(data: Object, fileCollections?: FileCollection[]): FormData {
    let formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key, data[key]))

    if (fileCollections) {
      fileCollections.forEach(fc => {
        if (fc.files)
          fc.files.forEach(file => formData.append(fc.name, file))
      })
    }

    return formData;
  }
}