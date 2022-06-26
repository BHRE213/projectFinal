import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor(private httpshared : HttpClient) { }

  shared : any =[{}];
  display_Image: any;

  getAll(){
    this.httpshared.get('https://localhost:44341/api/SharedData').subscribe((res) => {
      this.shared = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      //this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      //this.toastr.error(err.message, err.status)
    })
}

uploadAttachment(file: FormData) {
  this.httpshared.post('https://localhost:44341/api/SharedData/Upload', file)
    .subscribe((res: any) => {     
      this.display_Image = res.image;
    }, err => {
     
    })
}

createShared(data: any) {
  // this.spinner.show();
  data.image = this.display_Image;
  this.httpshared.post('https://localhost:44341/api/SharedData', data)
    .subscribe((res: any) => {
      // this.spinner.hide();
      // this.toastr.success('Created Successfully ✔️ ')
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })
}

UpdateShared(body: any) {
  if (this.display_Image != undefined) {
    body.image = this.display_Image;
  }
  this.httpshared.put('https://localhost:44341/api/SharedData', body).subscribe((res) => {
         // this.toastr.success('updated Successfully :)');
    }, err => {
      // this.toastr.error(err.status, err.message);
    })
}

deleteAbout(id:number){
  this.httpshared.delete('https://localhost:44341/api/SharedData/DeleteSData/'+id ).subscribe((res) => {
   
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