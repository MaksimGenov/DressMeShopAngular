import { Injectable } from '@angular/core';
import { Link } from '../../models/Link';
import { LinkableModel } from '../../models/LinkableModel';

@Injectable({
  providedIn: 'root'
})
export class LinkGeneratorService {

  constructor() { }

  generateLink(model: LinkableModel, prefix: string, suffix: string): Link {
    const url = `${prefix}${model._id}${suffix}`
    return {name: model.name, url, protection: null}
  }
}
