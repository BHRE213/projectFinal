import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public testing:CheckoutService) { }

  ngOnInit(): void {
    
  }
  CreateForm: FormGroup = new FormGroup({
    cvb: new FormControl(),
    iban: new FormControl(),
    expiredate: new FormControl()
  })
  send(){
    this.testing.getUserCardData(this.CreateForm.value)
  }

}
