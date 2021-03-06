import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  profileData: any = [];
  display_Image: any;


  viewProfile(data: any) {
    this.http.post('https://localhost:44341/api/Login/GetUserById/', data).subscribe((res) => {

      this.profileData = res;   
    }, err => {
  
      this.toastr.error(err.message, err.status)
    })
  }

  UpdateProfile(body: any) {
    if (this.display_Image != undefined) {
      body.imagepath = this.display_Image;
    }
    this.http.put('https://localhost:44341/api/User/UpdateUser/', body).subscribe((res) => {
      this.toastr.success('updated Successfully :)');
    }, err => {
      this.toastr.error(err.status, err.message);
    })
  }
  
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44341/api/User/upload/', file)
      .subscribe((res: any) => {
        this.display_Image = res.imagepath;
      }, err => {

      })
  }
}
