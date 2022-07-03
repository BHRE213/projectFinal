import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [ Validators.required]);
  passFormControl = new FormControl('',[ Validators.minLength(6),Validators.required]);

  constructor(private router:Router, public authService: AuthService,private spinner : NgxSpinnerService) { }

  login(){
    this.authService.login(this.emailFormControl.value, this.passFormControl.value);
  }
  goToRegister(){
    this.router.navigate(['register']);
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() =>{
      this.spinner.hide();
    },500);
  }

}
