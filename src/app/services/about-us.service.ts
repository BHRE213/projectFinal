import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {


  constructor(private http: HttpClient,private toastr: ToastrService) { }
  aboutUsData:any=[];
  aboutUsData1:any=[];
  display_Image: any;

  getAll(){
    this.http.get('https://localhost:44341/api/aboutus/').subscribe((res) => {
      this.aboutUsData = res;
  
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })    
  }

  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44341/api/AboutUs/Upload/', file)
      .subscribe((res: any) => {     
        this.display_Image = res.image;
      }, err => {
       
      })
  }

  createAboutus(data: any) {
    // this.spinner.show();
    data.image = this.display_Image;
    this.http.post('https://localhost:44341/api/AboutUs/Create/', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
        this.toastr.success('Created Successfully ✔️ ')
      }, err => {
        // this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }


  deleteAbout(id:number){
    this.http.delete('https://localhost:44341/api/AboutUs/delete/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })


    
  }
UpdateAbput(body: any) {
  if (this.display_Image != undefined) {
    body.image = this.display_Image;
  }
  this.http.put('https://localhost:44341/api/AboutUs/update/', body).subscribe((res) => {
         this.toastr.success('updated Successfully  ✔️');
    }, err => {
      this.toastr.error(err.status, err.message);
    })
  }

  
  getAll1(){
    this.http.get('https://localhost:44341/api/aboutus/').subscribe((res) => {
      this.aboutUsData1 = res;
  
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })    
  }
}
