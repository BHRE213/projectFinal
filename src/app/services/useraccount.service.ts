import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor(private http: HttpClient) { }

  allusers:any=[];
  getAll(){
    this.http.get('https://localhost:44341/api/User').subscribe((res) => {
      this.allusers = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })

    
  }
  deleteuser(id:number){
    this.http.delete('https://localhost:44341/api/User/DeleteUser/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })


    
  }
}
