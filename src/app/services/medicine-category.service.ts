import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class MedicineCategoryService {


  constructor(private http: HttpClient) { }
  medicineCategoryData:any=[];
  display_Image: any;

  getAll(){
    this.http.get('https://localhost:44341/api/MedicineCategory').subscribe((res) => {
      this.medicineCategoryData = res;
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
    this.http.post('https://localhost:44341/api/MedicineCategory/Upload', file)
      .subscribe((res: any) => {     
        this.display_Image = res.imagepath;
      }, err => {
       
      })
  }
  createMedicineCategory(data: any) {
    // this.spinner.show();
    data.imagepath = this.display_Image;
    this.http.post('https://localhost:44341/api/MedicineCategory/CreateMedicineCategory', data)
      .subscribe((res: any) => {
        // this.spinner.hide();
        // this.toastr.success('Created Successfully ✔️ ')
      }, err => {
        // this.spinner.hide();
        // this.toastr.error(err.message, err.status)
      })
  }


  deleteMedicineCategory(id:number){
    this.http.delete('https://localhost:44341/api/MedicineCategory/DeleteMedicineCategory/'+id ).subscribe((res) => {
     
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
