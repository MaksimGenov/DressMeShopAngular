import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  generateImagePreviewUrl(image: File): Promise<string>  {
    return new Promise(async (resolve, reject) => {
      let reader = new FileReader()
      reader.onload = (e: any) => resolve(e.target.result)
      return reader.readAsDataURL(image)
    })
    
  }
}
