import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }
  medicineData:any=[];
  display_Image: any;
  getAll(){
    this.http.get('https://localhost:44341/api/Medicine/GetMedicne/').subscribe((res) => {
      this.medicineData = res;
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
    this.http.post('https://localhost:44341/api/Medicine/Upload/', file)
      .subscribe((res: any) => {     
        this.display_Image = res.image;
      }, err => {
       
      })
  }

  createMedicine(data: any) {
    // this.spinner.show();
    data.image = this.display_Image;
    this.http.post('https://localhost:44341/api/AboutUs/CreateMedicen/', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
        // this.toastr.success('Created Successfully ✔️ ')
      }, err => {
        // this.spinner.hide();
        // this.toastr.error(err.message, err.status)
      })
  }


  deleteMedicine(id:number){
    this.http.delete('https://localhost:44341/api/AboutUs/deleteMedicne/'+id ).subscribe((res) => {
     
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      // this.toastr.error(err.message, err.status)
    })


    
  }
  UpdateMedicine(body: any) {
    if (this.display_Image != undefined) {
      body.image = this.display_Image;
    }
    this.http.put('https://localhost:44341/api/AboutUs/UpdateMedicen/', body).subscribe((res) => {
          // this.toastr.success('updated Successfully :)');
      }, err => {
        // this.toastr.error(err.status, err.message);
      })
  }
}
