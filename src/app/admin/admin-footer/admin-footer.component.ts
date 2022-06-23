import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FooterService } from 'src/app/services/footer.service';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {


  constructor(public footer: FooterService, private dialog: MatDialog) { }

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>

  pfooter: any = {}

  ngOnInit(): void {
    this.footer.getAll();
  }

  updatForm: FormGroup = new FormGroup({
    footerid: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
  })

  openUpdateDailog(footerid1: any, about1: any, location1: any, email1: any, phonenumber1: any) {
    this.pfooter = {
      footerid: footerid1,
      about: about1,
      location: location1,
      email: email1,
      phonenumber: phonenumber1
    }
    this.updatForm.controls['footerid'].setValue(footerid1);
    this.dialog.open(this.callUpdateDialog)
  }

  updateFooter() {
    this.footer.UpdateFooter(this.updatForm.value);
    window.location.reload();
  }

}
