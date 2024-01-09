import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../interface_category';
import { HttpDataServiceService } from '../http-data-service.service';

@Component({
  selector      : 'app-top-nav',
  templateUrl   : './top-nav.component.html',
  styleUrls     : ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private httpDataService: HttpDataServiceService
    ) {
      this.httpDataService.getCategoryAll().subscribe(a => this.categories = a);
  }

  ngOnInit() {
    
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}
