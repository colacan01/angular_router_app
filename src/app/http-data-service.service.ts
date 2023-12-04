import { Injectable } from '@angular/core';

import { Category, Good } from './interface_category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataServiceService {
  private baseURL = 'http://172.30.1.55:48080/api/';
  private targetAPI = '';

  constructor(
    private http: HttpClient    
  ) 
  {}
  
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

  getCategoryAll(): Observable<Category[]>  {
    this.targetAPI = 'Base/getCategoryAll';
    
    return this.http.get<Category[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  geCategories(CategoryId?: string): Observable<Category[]>  {
    this.targetAPI = 'base/getCategories';
    
    if(CategoryId != null) {
      CategoryId = '?CategoryId=' + CategoryId
    }

    return this.http.get<Category[]>(this.baseURL + this.targetAPI + CategoryId)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }


  geCategory(CategoryId?: string): Observable<Category>  {
    
    
    if(CategoryId != null) {
      this.targetAPI = 'base/getCategory';
      CategoryId = '?CategoryId=' + CategoryId
    }
    else
    {
      this.targetAPI = 'base/getCategories';
    }

    return this.http.get<Category>(this.baseURL + this.targetAPI + CategoryId)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }
  
  getGoodsAll(): Observable<Good[]>  {
    this.targetAPI = 'good/getGoods';
    return this.http.get<Good[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getGoodsByCategory(CategoryId: string): Observable<Good[]>  {
    this.targetAPI = 'good/getGoods';
    return this.http.get<Good[]>(this.baseURL + this.targetAPI + '/' + CategoryId)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getGoodsNewProd(): Observable<Good[]>  {
    this.targetAPI = 'good/getGoodsNewProd';
    return this.http.get<Good[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getGoodPop(): Observable<Good[]>  {
    this.targetAPI = 'good/getGoodsPop';
    return this.http.get<Good[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getGood(GoodId: string): Observable<Good>  {
    this.targetAPI = 'good/getGood';
    return this.http.get<Good>(this.baseURL + this.targetAPI + '/' + GoodId)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }
}
