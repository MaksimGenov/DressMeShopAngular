import { Component, OnInit, Input } from '@angular/core';
import { PagerServiceService } from '../../../../services/pager-service/pager-service.service';
import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() itemsCount: number
  @Input() itemsPerPage: number
  pager: any

  constructor(
    private pagerService: PagerServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   let page = this.route.snapshot.queryParams.page || 1
   this.pager = this.pagerService.getPager(this.itemsCount, page, this.itemsPerPage)
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.itemsCount, page, this.itemsPerPage)
    let urlTree = this.router.parseUrl(this.router.url)
    urlTree.queryParams['page'] = page
    urlTree.queryParams['pageSize'] = this.itemsPerPage
    this.router.navigateByUrl(urlTree)
  }
}
