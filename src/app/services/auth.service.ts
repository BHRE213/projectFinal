import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  display_Image: any;

  createUser(data: any) {
    // this.spinner.show();
    data.image = this.display_Image;
    this.http.post('https://localhost:44341/api/User/', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
        // this.toastr.success('Created Successfully ✔️ ')
      }, err => {
        // this.spinner.hide();
        // this.toastr.error(err.message, err.status)
      })
  }


  login(email: any, pass: any) {
    let body = {
      email: email.toString(),
      password: pass.toString()
    }

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }

    // this.spinner.show();
    this.http.post('https://localhost:44341/api/login/userlogin/', body, requestOptions).subscribe((res) => {
      const responce = {
        token: res.toString()
      }
      // this.spinner.hide();
      localStorage.setItem('token', responce.token); // ecoded token
      let data: any = jwt_decode(responce.token); // decoded token

      localStorage.setItem('user', JSON.stringify({ ...data }));      
      localStorage.setItem('id',data.nameid)
      
      if (data.role == 'Admin') {
        this.router.navigate(['admin/about']);
      } else if (data.role == 'customer') {
        this.router.navigate(['course']);
      }

    })

  }
}
