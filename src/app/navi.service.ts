import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaviService {
  private strURL = new BehaviorSubject<string>('');
  backURL = this.strURL.asObservable();

  constructor() {}

  setBackUrl(url: string) {
    this.strURL.next(url);
  }  
}