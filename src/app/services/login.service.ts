import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

  constructor( private router: Router ) { }

  public isLoggedIn(): boolean {
      if (sessionStorage.getItem( 'userInfo' )) {
          return true;
      }
      return false;
  }

  public logout() {
      sessionStorage.removeItem( 'userInfo' );
      this.router.navigate(['/login']);
  }
}
