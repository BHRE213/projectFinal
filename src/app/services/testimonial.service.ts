import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }
  testimonialData:any=[];
  testimonialStatusData:any =[] 
  display_Image: any;

  getAll(){
    this.http.get('https://localhost:44341/api/Testemonial/').subscribe((res) => {
      this.testimonialData = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
 
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })    
  }

  
  getAllStatusData(){
    this.http.get('  https://localhost:44341/api/TestemonialStatus/').subscribe((res) => {
      this.testimonialStatusData = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })    
  }

  updateTestemonial(data :any){
    this.http.post('https://localhost:44341/api/Testemonial/UpdateTestById/',data).subscribe((res) => {
    }, err => {  this.toastr.error(err.message, err.status)     
    })    
  }

  createTestemonial(data: any) {
    // this.spinner.show();
    data.image = this.display_Image;
    this.http.post('https://localhost:44341/api/Testemonial/', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
      }, err => {
        // this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }

  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44341/api/Testemonial/Upload/', file)
      .subscribe((res: any) => {     
        this.display_Image = res.image;
      }, err => {
       
      })
  }

}
