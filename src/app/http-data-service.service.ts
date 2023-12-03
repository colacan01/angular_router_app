import { Injectable } from '@angular/core';

import { Category } from './interface_category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataServiceService {
  private baseURL = 'http://172.30.1.55:48080/api/';
  private targetAPI = 'base/getcategory';

  constructor(
    private http: HttpClient    
  ) 
  {}

  getCategoryAll(): Observable<Category[]>  {
    return this.http.get<Category[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getSubCategoryByCategory(CategoryId: string): Observable<Category[]>  {
    return this.http.get<Category[]>(this.baseURL + this.targetAPI + '/' + CategoryId)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }
  
  private ErrorHandler(error: HttpErrorResponse) {
    if (error.status === 0) 
    {
      console.error('에러가 발생했습니다.: ', error.message);
    }
    else 
    {
      console.error('백엔드에서 ${error.status} 코드를 반환했습니다. 바디는 다음과 같습니다. ', error.error);
    }
    return throwError(() => new Error('나쁜일 일어났음. 다시 시도하세요.'));
  }
}
