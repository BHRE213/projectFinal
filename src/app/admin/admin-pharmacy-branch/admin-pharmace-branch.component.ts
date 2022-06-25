import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-admin-pharmace-branch',
  templateUrl: './admin-pharmace-branch.component.html',
  styleUrls: ['./admin-pharmace-branch.component.css']
})
export class AdminPharmaceBranchComponent implements OnInit {

  constructor(public pharmacy:PharmacyService, private dialog: MatDialog) { }
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDailog') callDeleteDailog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  
  ngOnInit(): void {
    this.pharmacy.getAll();
  }
allpharmacy:any={
  
};

CreateForm: FormGroup = new FormGroup({
  
 name: new FormControl('', Validators.required),
  image: new FormControl(),
  text: new FormControl(),
  phone:new FormControl(),
  x:new FormControl(),
  y:new FormControl(),
  open:new FormControl(),
  close:new FormControl()


})

updatForm: FormGroup = new FormGroup({
  pharmacybranchesid : new FormControl('', Validators.required),
 name: new FormControl('', Validators.required),
  image: new FormControl(),
  text: new FormControl(),
  phone:new FormControl(),
  x:new FormControl(),
  y:new FormControl(),
  open:new FormControl(),
  close:new FormControl()

})

uploadFile(file: any) {
  if (file.length === 0) {
    return;
  }
  let fileUpload = <File>file[0];
  // file[0]:'angular.png';
  const fromData = new FormData();
  fromData.append('file', fileUpload, fileUpload.name);
  this.pharmacy.uploadAttachment(fromData);
}

save() {
  this.pharmacy.createPharmacy(this.CreateForm.value);
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
        this.pharmacy.deletePharmacy(id);
        window.location.reload();
      }
      else if (result == 'no')
        console.log('Thank you');
    }
  })
}

openUpdateDailog(idd: any, na: any, tx: any,p:any,xx:any,yy:any,o:any,c:any ,im: any) {
  this.allpharmacy = {
    name:na,
    pharmacybranchesid:idd,

    image: im,
  text: tx,
  phone:p,
  x:xx,
  y:yy,
  open:o,
  close:c
  }

   this.updatForm.controls['pharmacybranchesid'].setValue(idd);
   this.updatForm.controls['name'].setValue(na);
   this.updatForm.controls['text'].setValue(tx);
   this.updatForm.controls['phone'].setValue(p);
   this.updatForm.controls['x'].setValue(xx);
   this.updatForm.controls['y'].setValue(yy);
   this.updatForm.controls['open'].setValue(o);
   this.updatForm.controls['close'].setValue(c);
  this.dialog.open(this.callUpdateDialog)

}

updatepharmacy() {

  this.pharmacy.UpdatePharmacy(this.updatForm.value);
  window.location.reload();

}






}
