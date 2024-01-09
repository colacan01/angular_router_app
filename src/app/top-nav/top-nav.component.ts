import { Component, inject, OnInit }    from '@angular/core';
import { Category }                     from '../interface_category';
import { HttpDataServiceService }       from '../http-data-service.service';
import { NaviService }                  from '../navi.service';

@Component({
  selector      : 'app-top-nav',
  templateUrl   : './top-nav.component.html',
  styleUrls     : ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  categories: Category[] = [];

  backURL   : string = '';
  constructor(
    private httpDataService   : HttpDataServiceService,
    private naviService       : NaviService
    ) {
      this.httpDataService.getCategoryAll().subscribe(a => this.categories = a);      
  }

  ngOnInit() {
    this.naviService.backURL.subscribe( a => this.backURL = a);
    this.naviService.setBackUrl('');
  }

  logOut() {
    localStorage.removeItem("jwt");
  }  
}
