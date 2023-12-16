import { Component, Input } from '@angular/core';
import { Good_Info }        from '../../../interface_category';

@Component({
  selector: 'app-good-info',
  templateUrl: './good-info.component.html',
  styleUrls: ['./good-info.component.css']
})
export class GoodInfoComponent {
  @Input() good_infos: Good_Info[] | any;

  getItems(content_data: string | undefined, separator: string): string[] | undefined {    
    return content_data?.split(separator);
  }
}


