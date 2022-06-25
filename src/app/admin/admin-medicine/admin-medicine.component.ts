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

  constructor(public medicine:MedicineService,private dialog: MatDialog) { }
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>

  
  medicinee: any = {};

  ngOnInit(): void {
    this.medicine.getAll();
  }
  CreateForm: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Medicinenumber: new FormControl('', Validators.required),
    Cost: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    MedicineCategoryId: new FormControl('', Validators.required),
    Imagepath: new FormControl('', Validators.required)
  })

  updatForm: FormGroup = new FormGroup({
    Medicineid: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Medicinenumber: new FormControl('', Validators.required),
    Cost: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    MedicineCategoryId: new FormControl('', Validators.required),
    Imagepath: new FormControl('', Validators.required)

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
  openUpdateDailog(medicineid1: any, name1: any, medicinenumber1: any,cost1: any,price1: any,description1:any,medicineCategoryId1:any, imagepath1: any) {
    this.medicinee = {
      Medicineid: medicineid1,
      Name: name1,
      Medicinenumber: medicinenumber1,
      Cost: cost1,
      Price: price1,
      Description: description1,
      MedicineCategoryId: medicineCategoryId1,
      Imagepath: imagepath1,
    }

     this.updatForm.controls['Medicineid'].setValue(medicineid1);
     this.updatForm.controls['image'].setValue(imagepath1);
    this.dialog.open(this.callUpdateDialog)

  }

  UpdateMedicine() {

    this.medicine.UpdateMedicine(this.updatForm.value);
    window.location.reload();

  }

}
