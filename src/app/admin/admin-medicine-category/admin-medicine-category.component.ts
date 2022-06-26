import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MedicineCategoryService } from 'src/app/services/medicine-category.service';


@Component({
  selector: 'app-admin-medicine-category',
  templateUrl: './admin-medicine-category.component.html',
  styleUrls: ['./admin-medicine-category.component.css']
})

export class AdminMedicineCategoryComponent implements OnInit {

  constructor(public medicineCategory: MedicineCategoryService, private dialog: MatDialog) { }
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>

  ngOnInit(): void {
    this.medicineCategory.getAll();
  }
  CreateForm: FormGroup = new FormGroup({
    type: new FormControl('', Validators.required),
    imagepath: new FormControl(),
    
  })

  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.medicineCategory.uploadAttachment(fromData);
  }

  save() {
    this.medicineCategory.createMedicineCategory(this.CreateForm.value);
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
          this.medicineCategory.deleteMedicineCategory(id);
          window.location.reload();
        }
        else if (result == 'no')
          console.log('Thank you');
      }
    })
  }
}