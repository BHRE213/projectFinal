import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  allcontact:any=[];
  getAll(){
    this.http.get('https://localhost:44341/api/Contact').subscribe((res) => {
      this.allcontact = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })

    
  }
  deletecontact(id:number){
    this.http.delete('https://localhost:44341/api/Contact/DeleteContactUs/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })


    
  }
  createcontact(data: any) {
    // this.spinner.show();
 
    this.http.post('https://localhost:44341/api/Contact/CreateContactUsForm', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
       this.toastr.success('Created Successfully ✔️ ')
      }, err => {
        // this.spinner.hide();
        // this.toastr.error(err.message, err.status)
      })
  }

}
