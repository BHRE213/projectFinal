import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor( private http:HttpClient,private toastr: ToastrService) { }
  footerData:any=[];
  getAll(){
    this.http.get('https://localhost:44341/api/Footer/').subscribe((res) => {
      this.footerData = res;   
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })    
  }
  UpdateFooter(body: any) {
    
   
    this.http.put('https://localhost:44341/api/Footer/update/', body).subscribe((res) => {
           this.toastr.success('updated Successfully :)');
      }, err => {
        this.toastr.error(err.status, err.message);
      })
  }
}
