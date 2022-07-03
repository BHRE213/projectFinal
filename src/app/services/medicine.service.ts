import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  medicineData: any = [];
  medicineCategoryData: any = [];
  display_Image: any;
  medicineId:any;
  singleMedicineData: any = [];

  getAll() {
    this.http.get('https://localhost:44341/api/Medicine/GetMedicne/').subscribe((res) => {
      this.medicineData = res;
     
    }, err => {

    })
  }
  getMedicineCategoryData() {
    this.http.get('https://localhost:44341/api/MedicineCategory/').subscribe((res) => {
      this.medicineCategoryData = res;   
     
    }, err => {
     
      this.toastr.error(err.message, err.status)
    })
  }
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44341/api/Medicine/Upload/', file)
      .subscribe((res: any) => {
        this.display_Image = res.imagepath;
        console.log(this.display_Image)
      }, err => {

      })

  }

  createMedicine(data: any) {
    // this.spinner.show();
    data.imagepath = this.display_Image;
    this.http.post('https://localhost:44341/api/Medicine/CreateMedicen/', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
        this.toastr.success('Created Successfully ✔️ ')
      }, err => {
        // this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }


  deleteMedicine(id: number) {
    this.http.delete('https://localhost:44341/api/Medicine/deleteMedicne/' + id).subscribe((res) => {

      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Delete !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })



  }
  UpdateMedicine(body: any) {
    if (this.display_Image != undefined) {
      body.imagepath = this.display_Image;
    }
    this.http.put('https://localhost:44341/api/Medicine/UpdateMedicen/', body).subscribe((res) => {
      this.toastr.success('updated Successfully  ');
 }, err => {
   this.toastr.error(err.status, err.message);
 })

  }

  searchByName(body: any) {

    this.http.post('https://localhost:44341/api/Medicine/searchProduct/', body).subscribe((res) => {
      this.medicineData = res;
      //hide spinner
      // this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })
  }

  getMedicineById(data: any) {
    // this.spinner.show();
  
    this.http.post('https://localhost:44341/api/Medicine/GetMedicineBtId/', data)
      .subscribe((res: any) => {
        this.singleMedicineData = res;
        // this.spinner.hide();
       
      }, err => {
        // this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }
}
