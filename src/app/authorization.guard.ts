import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      if (state.url.indexOf('admin') >= 0) {
        let user: any = localStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
          if (user.role == 'Admin') {
            // this.toastr.success('Welcome in admin pages ');  
            return true;
          }
          else {
            // this.toastr.warning('this page for admin');  
            this.router.navigate(['']);
            return false;
          }
        }
      }
      else {
        this.router.navigate(['']);
        // this.toastr.warning('you are not user from db');  
        return false;
      }
      return true;
    }
    else {
      this.router.navigate(['']);
      // this.toastr.warning('you are not autherize to login!!')
      return false;
    }

  }
}
