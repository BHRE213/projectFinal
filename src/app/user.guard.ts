import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private toastr:ToastrService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token');
      if (token) {
        if (state.url.indexOf('user') >= 0) {
          let user: any = localStorage.getItem('user');
          if (user) {
            user = JSON.parse(user);
            if (user.role == 'User') {
              
              return true;
            }
            else {
              this.toastr.warning('This Page For User');  
              this.router.navigate(['']);
              return false;
            }
          }
        }
        else {
          this.router.navigate(['']);
          this.toastr.warning('You Are Not User From Db');  
          return false;
        }
        return true;
      }
      else {
        this.router.navigate(['']);
        this.toastr.warning('This Page For Logged-in User')
        return false;
      }
  }
  
}
