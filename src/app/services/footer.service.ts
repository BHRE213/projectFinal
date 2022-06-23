import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor( private http:HttpClient) { }
  footerData:any=[];
  getAll(){
    this.http.get('https://localhost:44341/api/Footer/').subscribe((res) => {
      this.footerData = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })    
  }
  UpdateFooter(body: any) {
    
   
    this.http.put('https://localhost:44341/api/Footer/update/', body).subscribe((res) => {
           // this.toastr.success('updated Successfully :)');
      }, err => {
        // this.toastr.error(err.status, err.message);
      })
  }
}
