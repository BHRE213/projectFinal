import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SitedataService {

  constructor(private httpsite : HttpClient) { }

  
  shared : any =[{}];
  display_Image: any;

  getAll(){
    this.httpsite.get('https://localhost:44341/api/SiteData/').subscribe((res) => {
      this.shared = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })
}

uploadAttachment(file: FormData) {
  this.httpsite.post('https://localhost:44341/api/SiteData/Upload/', file)
    .subscribe((res: any) => {     
      this.display_Image = res.image;
    }, err => {
     
    })
}

createAboutus(data: any) {
  // this.spinner.show();
  data.image = this.display_Image;
  this.httpsite.post('https://localhost:44341/api/SiteData/', data)
    .subscribe((res: any) => {
      // this.spinner.hide();
      // this.toastr.success('Created Successfully ✔️ ')
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })
}

UpdateAbput(body: any) {
  if (this.display_Image != undefined) {
    body.image = this.display_Image;
  }
  this.httpsite.put('https://localhost:44341/api/SiteData/', body).subscribe((res) => {
         // this.toastr.success('updated Successfully :)');
    }, err => {
      // this.toastr.error(err.status, err.message);
    })
}

deleteAbout(id:number){
  this.httpsite.delete('https://localhost:44341/api/SiteData/DeleteSiteData/'+id ).subscribe((res) => {
   
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
