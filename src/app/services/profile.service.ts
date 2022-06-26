import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }
  profileData:any=[];
  display_Image: any;
  
     
  viewProfile(id:number){
    this.http.get('https://localhost:44341/api/user/ViewProfile/'+id).subscribe((res) => {

      this.profileData = res;
     console.log( this.profileData.fullname);
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })    
  }

  UpdateProfile(body: any) {
    if (this.display_Image != undefined) {
      body.image = this.display_Image;
    }
    this.http.put('https://localhost:44341/api/User/UpdateUser', body).subscribe((res) => {
           // this.toastr.success('updated Successfully :)');
      }, err => {
        // this.toastr.error(err.status, err.message);
      })
  }
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44341/api/User/uploadImage', file)
      .subscribe((res: any) => {     
        this.display_Image = res.image;
      }, err => {
       
      })
  }
}
