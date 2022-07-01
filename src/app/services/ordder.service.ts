import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class OrdderService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  allorder:any=[];
  getAll(){
    this.http.get('https://localhost:44341/api/order/GetAllOrder').subscribe((res) => {
      this.allorder = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })

    
  }
  deleteorder(id:number){
    this.http.delete('https://localhost:44341/api/Order/deleteOrder/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })   
  }

  acceptorder(id:number){
    this.http.get('https://localhost:44341/api/Order/AcceptOrder/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })   
  }

  rejectorder(id:number){
    this.http.get('https://localhost:44341/api/Order/RejectOrder/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })


    
  }
}
