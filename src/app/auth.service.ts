import { Injectable }                       from '@angular/core';

import { LoggedUser, LoginUser }            from './interface_category';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { HttpHeaders, HttpParams }          from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';

import { JwtHelperService }                 from '@auth0/angular-jwt';
import { environment }                      from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private baseURL = environment.baseURL;
    private targetAPI = '';

  constructor(private http: HttpClient    ) { }

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

  putLogin(loginUser: LoginUser): Observable<LoggedUser> {
    this.targetAPI = 'account/putlogin';

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put<LoggedUser>(this.baseURL + this.targetAPI, loginUser, httpHeader)
            .pipe(
              catchError(this.ErrorHandler)
            );          
  }
}
