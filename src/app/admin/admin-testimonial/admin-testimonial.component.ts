import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-admin-testimonial',
  templateUrl: './admin-testimonial.component.html',
  styleUrls: ['./admin-testimonial.component.css']
})
export class AdminTestimonialComponent implements OnInit {

  constructor(public testimonial: TestimonialService, private dialog: MatDialog) { }

  @ViewChild('callUpdateDailog') callUpdateDailodg!: TemplateRef<any>


  testtemonialsData: any = {}

  UpdateForm: FormGroup = new FormGroup({
    Testimonialid: new FormControl(),
    Teststatid: new FormControl()
  })

  ngOnInit(): void {
    this.testimonial.getAll();

  }
  openUpdateDailog(testId: any, Text: any, Title1: any, imagename2: any, stat: any,name1:any) {
    this.testimonial.getAllStatusData();
    this.testtemonialsData = {
      txt: Text,
      title: Title1,
      status: stat,
      name:name1
    }
    this.UpdateForm.controls['Testimonialid'].setValue(testId);
    this.dialog.open(this.callUpdateDailodg)
  }

  update() {
    this.testimonial.updateTestemonial(this.UpdateForm.value)
    window.location.reload();
  }
}
