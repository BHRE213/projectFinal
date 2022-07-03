import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor(private httpshared : HttpClient,private toastr: ToastrService) { }

  shared : any =[];
  display_Image: any;

  getAll(){
    this.httpshared.get('https://localhost:44341/api/SharedData/').subscribe((res) => {
      this.shared = res;
    }, err => {
    
      this.toastr.error(err.message, err.status)
    })
}

uploadAttachment(file: FormData) {
  this.httpshared.post('https://localhost:44341/api/SharedData/Upload', file)
    .subscribe((res: any) => {     
      this.display_Image = res.image;
    }, err => {
     
    })
}

createAboutus(data: any) {
  // this.spinner.show();
  data.image = this.display_Image;
  this.httpshared.post('https://localhost:44341/api/SharedData/', data)
    .subscribe((res: any) => {
      // this.spinner.hide();
      this.toastr.success('Created Successfully ✔️ ')
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })
}

UpdateAbput(body: any) {
  if (this.display_Image != undefined) {
    body.image = this.display_Image;
  }
  this.httpshared.put('https://localhost:44341/api/SharedData/', body).subscribe((res) => {
         this.toastr.success('updated Successfully :)');
    }, err => {
      this.toastr.error(err.status, err.message);
    })
}

deleteAbout(id:number){
  this.httpshared.delete('https://localhost:44341/api/SharedData/DeleteSData/'+id ).subscribe((res) => {
   
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