import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand-service/brand.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {
  isLoading: Boolean
  brands: Brand[]
  brandsTotalCount: number
  brandsPerPage: number = 10

  constructor(private brandService: BrandService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.loadBrands(queryParams))
  }

  private loadBrands(queryParams: Params): void {
    this.isLoading = true
    this.brandService.getPage(this.generateSerchParams(queryParams))
      .subscribe(response => {
        this.brands = response.body.content
        this.brandsTotalCount = response.body.totalElements
        this.isLoading = false
      })
  }

  private generateSerchParams(queryParams: Params): Object {
    let searchParams = Object.assign({}, queryParams)

    if (typeof queryParams.page === 'undefined')
      searchParams.page = 1
    if (typeof queryParams.pageSize === 'undefined')
      searchParams.pageSize = this.brandsPerPage

    return searchParams
  }

}
