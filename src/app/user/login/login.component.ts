import { Component, OnInit }                        from '@angular/core';
import { ActivatedRoute, Route, Router }            from '@angular/router';
import { HttpClient  }                              from '@angular/common/http';
import { FormBuilder, Validators }                  from '@angular/forms';
import { FormControl, FormGroup }                   from '@angular/forms';
import { LoginUser, LoggedUser }                    from '../../interface_category';
import { AuthService }                              from '../../auth.service';
import { CookieService }                            from 'ngx-cookie-service';

@Component({
  selector      : 'app-login',
  templateUrl   : './login.component.html',
  styleUrls     : ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup ({
                              user_id       : new FormControl('', [
                                                                    Validators.required,
                                                                    Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
                                                                  ]),
                              user_password : new FormControl('', [
                                                                    Validators.required,
                                                                    Validators.pattern(/[a-zA-Z0-9]/)
                                                                  ])
                            });
  
  ipAddress     : string = '';
  loginUser     : LoginUser | any;
  loggedUser    : LoggedUser | any;
                            
  backURL       : string = '';


  constructor(
    private router            : Router,
    private route             : ActivatedRoute,
    private http              : HttpClient,
    private AuthService       : AuthService,
    private cookieService     : CookieService
    ) 
    {
      this.loginUser = {
        user_id        : ' ',
        user_password  : ' ',
        user_agent     : ' ',
        remote_address : ' '  
      }

      this.route.queryParams.subscribe(
        parameters => {
          this.backURL   = String(parameters['backURL']);
        });
    }

  ngOnInit() {
      this.getIPAddress();
    }

  onSubmit(): void {
    // this.user_id        = (<HTMLInputElement>document.getElementById('user_id')).value;
    
    this.loginUser.user_id        = this.loginForm.value.user_id;
    this.loginUser.user_password  = this.loginForm.value.user_password;
    this.loginUser.user_agent     = window.navigator.userAgent;
    this.loginUser.remote_address = this.ipAddress;

    this.AuthService.putLogin(this.loginUser).subscribe( a => {

      console.log(a);

      if(a.result_code == "0") {
        //Cookie 생성
        //사용자ID/사용자 등급
        this.cookieService.set('validUserId'              , a.user_id);
        this.cookieService.set('validUserName'            , a.user_name);
        this.cookieService.set('validUserClass'           , a.user_class);
        this.cookieService.set('validUserLoginDateTime'   , String(a.user_login_success_datetime));

        //jwt 토큰값 저장
        const token = a.token;
        localStorage.setItem("jwt", token);        
      }
      else if (a.result_code == "-1") {
        window.alert("등록된 사용자가 아닙니다.");
        (<HTMLInputElement>document.getElementById('user_id')).value = '';
        (<HTMLInputElement>document.getElementById('user_password')).value = '';
      }
      else if (a.result_code == "-2") {
        window.alert("비밀번호가 맞지 않습니다.");
        (<HTMLInputElement>document.getElementById('user_password')).value = '';
      }
      else {
        this.router.navigate(["/"]);
      }

      if(this.backURL == 'undefined') {
        this.backURL = '/';
      }

      this.router.navigateByUrl(this.backURL);
    });

    
  }

  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;      
    });
  }
}
