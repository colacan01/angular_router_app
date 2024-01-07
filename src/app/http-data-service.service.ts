import { Injectable } from '@angular/core';

import { Category, Good, Goods_Path, Article, Reply, Article_Attach_File, LoggedUser, LoginUser } from './interface_category';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpDataServiceService {
  private baseURL = environment.baseURL;
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

  // putLogin(loginUser: LoginUser): Observable<LoggedUser> {
  //   this.targetAPI = 'account/putlogin';

  //   const httpHeader = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //     })
  //   };

  //   return this.http.put<LoggedUser>(this.baseURL + this.targetAPI, loginUser, httpHeader)
  //           .pipe(
  //             catchError(this.ErrorHandler)
  //           );          
  // }

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

  getGoodsPath(QueryType: string, GoodId: string): Observable<Goods_Path> {
    this.targetAPI = 'good/getGoodsPath';
    return this.http.get<Goods_Path>(this.baseURL + this.targetAPI + '/'+ QueryType +'/?FindKey=' + GoodId)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getArticles(BoardId: string, PageSize: string, PageIndex: string): Observable<Article[]> {
    this.targetAPI = 'content/getArticles?board_id='+ BoardId + '&page_size=' + PageSize + '&page_index=' + PageIndex;
    return this.http.get<Article[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getNewsArticles(): Observable<Article[]> {
    this.targetAPI = 'content/getnewsarticles';
    return this.http.get<Article[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getBoardPages(BoardId: string, PageSize: number) {
    this.targetAPI = 'content/' + BoardId + '/getBoardPages';
    return this.http.get<number>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getArticle(ArticleId: string): Observable<Article> {
    this.targetAPI = 'content/getArticle?Article_Id=' + ArticleId ;

    console.log("요청 url: ", this.baseURL + this.targetAPI);

    return this.http.get<Article>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getLeadArticle(BoardId: string, ArticleId: string): Observable<Article> {
    this.targetAPI = 'content/' + BoardId + '/getLeadArticle?Article_Id=' + ArticleId ;

    console.log('lead: ', this.targetAPI);

    return this.http.get<Article>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  getLagArticle(BoardId: string, ArticleId: string): Observable<Article> {
    this.targetAPI = 'content/' + BoardId + '/getLagArticle?Article_Id=' + ArticleId ;

    console.log('lag: ', this.targetAPI);

    return this.http.get<Article>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  //TODO: 게시판 목록 조회 서비스 개발 필요
  getBoards(): Observable<Category[]> {
    this.targetAPI = 'content/getBoards';
    return this.http.get<Category[]>(this.baseURL + this.targetAPI)
            .pipe(
              catchError(this.ErrorHandler)
            );      
  }

  postArticle(article: Article): Observable<Article> {
    // this.targetAPI = 'content/postNewArticle';
    this.targetAPI = 'content/postArticle';
    
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<Article>(this.baseURL + this.targetAPI, article, httpHeader)
            .pipe(
              catchError(this.ErrorHandler)
            );
  }

  postReadCount(ArticleId: string, ActionUserId: string): Observable<unknown> {
    this.targetAPI = 'content/postArticleReadCount?Article_Id=' + ArticleId + '&Action_User_Id=' + ActionUserId;

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    // console.log('postReadCount: Start');
    // console.log('postReadCount URL: ', this.baseURL + this.targetAPI);

    return this.http.post(this.baseURL + this.targetAPI, httpHeader)
            .pipe(
              catchError(this.ErrorHandler)
            );

  }

  postReply(reply: Reply): Observable<Reply> {
    this.targetAPI = 'content/postReply';
    
    console.log(reply);

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<Reply>(this.baseURL + this.targetAPI, reply, httpHeader)
            .pipe(
              catchError(this.ErrorHandler)
            );
  }

  // uploadFile(BoardId: string, ArticleId: string, FormData: FormData): Observable<Article_Attach_File[]> {
  uploadFile(BoardId: string, ArticleId: string, FormData: FormData) {
    this.targetAPI = 'content/uploadFile?Board_Id=' + BoardId + "&Article_Id=" + ArticleId;
    
    const httpHeader = {
      headers: {
        // 'Content-Type': 'multipart/form-data; boundary=' + ArticleId,
        'enctype':      'multipart/form-data',
        'Accept':       '*/*',
      }
    };

    const param = {
      params: {
        'Board_Id': BoardId,
        'Article_Id': ArticleId
      }
    };

    const options = {
      httpHeader, param
    }

    return this.http.post(this.baseURL + this.targetAPI, FormData, httpHeader)
                    .pipe(
                      catchError(this.ErrorHandler)
                    );
  }  

  putArticle(article: Article): Observable<Article> {
    this.targetAPI = 'content/putArticle';

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.put<Article>(this.baseURL + this.targetAPI, article, httpHeader)
            .pipe(
              catchError(this.ErrorHandler)
            );

  }

  delAttFile(aaf: Article_Attach_File): Observable<unknown> | any {
    this.targetAPI = 'content/delAttFile?Attach_File_Id=' + aaf.attach_file_id;

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    // const params = {
    //     'Attach_File_Id'  : aaf.attach_file_id
    // };
    
    // const body = aaf;
    
    // const options = {
    //   httpHeader, params, body    
    // }
    
    // console.log("delete 호출 시작: ", options);
    console.log("delete url: ", this.baseURL + this.targetAPI);

    return this.http.delete(this.baseURL + this.targetAPI, httpHeader)    
            .pipe(
              catchError(this.ErrorHandler)
            );
  }
}