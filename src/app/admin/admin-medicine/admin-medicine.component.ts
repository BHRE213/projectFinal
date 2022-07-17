import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MedicineService } from 'src/app/services/medicine.service';


@Component({
  selector: 'app-admin-medicine',
  templateUrl: './admin-medicine.component.html',
  styleUrls: ['./admin-medicine.component.css']
})
export class AdminMedicineComponent implements OnInit {

  constructor(public medicine: MedicineService, private dialog: MatDialog) { }
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>

  name:any='';
  medicinee: any = {};

  ngOnInit(): void {
    this.medicine.getAll();
  }
  CreateForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    medicinenumber: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    medicineCategoryId: new FormControl('', Validators.required),
    imagepath: new FormControl()
  })

  updatForm: FormGroup = new FormGroup({
    medicineid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    medicinenumber: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    medicineCategoryId: new FormControl('', Validators.required),
    imagepath: new FormControl()

  })

  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.medicine.uploadAttachment(fromData);
  }

  save() {
  
    this.medicine.createMedicine(this.CreateForm.value);
    window.location.reload();
    
  }

  openCreatedialog() {
    this.medicine.getMedicineCategoryData();
    this.dialog.open(this.callCreateDialog)
  }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

        if (result == 'yes') {
          this.medicine.deleteMedicine(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }
  openUpdateDailog(medicineid1: any, name1: any, medicinenumber1: any, cost1: any, price1: any, description1: any, medicineCategoryId1: any, imagepath1: any) {
    this.medicine.getMedicineCategoryData();
    this.medicinee = {
      medicineid: medicineid1,
      name: name1,
      medicinenumber: medicinenumber1,
      cost: cost1,
      price: price1,
      description: description1,
      medicineCategoryId: medicineCategoryId1,
      imagepath: imagepath1,
    }

    this.updatForm.controls['medicineid'].setValue(medicineid1);
    this.updatForm.controls['imagepath'].setValue(imagepath1);
    this.dialog.open(this.callUpdateDialog)

  }

  UpdateMedicine() {

    this.medicine.UpdateMedicine(this.updatForm.value);
    window.location.reload();

  }
  
  enterName(name:any){
   
    this.name=name.target.value;

  }

  search()
  {
    const t =this.name
    const k: string | any = t.charAt(0).toUpperCase() + t.slice(1);
    const searches = {
      name: k
    };

    if(searches.name.length == 0){
      window.location.reload();
    }else {  this.medicine.searchByName(searches)}
 
    

  
  }

}
