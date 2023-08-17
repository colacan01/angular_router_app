import { Injectable } from '@angular/core';
import { User } from './user';                /** 사용자 정보 */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserInfo(userId: string): string {
    /** 사용자 ID가 있는지 확인 
     * 
     * 만약 있다면 비밀번호 체크
     * 
     * 비밀번호가 틀리다면 "USER_PASSWORD_NOT_MATCHED" 오류코드 리턴
     * 
     * 비밀번호가 맞다면 "USER_AUTH_OK" 리턴
    */
    return 'OK';
  }

  setRegUser(user: User): string {
    /**
     * User 정보를 DB에 저장한다.
     * 
     * 1. 처리결과를 받아서 출력변수로 넘긴다
     * 1) 새로운 사용자 등록성공
     * 2) 기존사 용자 수정 성공
     * 0) 처리실패
     */

    return 'Result';
  }
}
