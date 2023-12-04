import { Component, OnInit }                  from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Good }                               from '../../interface_category';
import { HttpDataServiceService }             from '../../http-data-service.service';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {
  category_id:  string;
  good_id:      string;
  good?:        Good;
  
  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataServiceService
    ) 
    { 
      this.category_id  = '';
      this.good_id      = '';

      /** 아래 코드를 넣어야 같은 화면에서 리프레쉬 됨 */
      this.route.params.subscribe(
        params => {
          this.category_id    = String(params['category']);
          this.good_id        = String(params['id']);
          this.httpDataService.getGood(this.good_id).subscribe(a => this.good = a);                  
          console.log('values: ', this.good_id);        
        }
      );
    }
  
  ngOnInit() {}      

  getSizes(size_data: string | undefined, separator: string): string[] | undefined {    
    return size_data?.split(separator);
  }

  getFeatures(feature_data: string | undefined, separator: string): string[] | undefined {    
    return feature_data?.split(separator);
  }

  /** 항목명|항목설명 형식으로 return */
  getSpecs(spec_data: string | undefined, separator: string): string[] | undefined {    
    return spec_data?.split(separator);
  }

  /** 항목명 return */
  getItemName(item_data: string | undefined, separator: string): string | undefined {        
    return item_data?.split(separator)[0];
  }
  /** 항목설명 return */
  getItemDesc(item_data: string | undefined, separator: string): string | undefined {        
    return item_data?.split(separator)[1];
  }
}
