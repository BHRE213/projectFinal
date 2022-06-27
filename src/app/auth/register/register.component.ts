import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerform:FormGroup=new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    username : new FormControl('',[Validators.required]),
    fullname : new FormControl('',[Validators.required]),
    phonenumber : new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(8)])
     })

  constructor(private router: Router,public auth : AuthService) { }

  ngOnInit(): void {
  }


 


  submit(){
    this.auth.createUser(this.registerform.value);
    window.location.reload();
    }
   
    matchError()
    {
      if(this.registerform.controls[
        'password'].value == this.registerform.controls['confirmpassword'].value
      )
      this.registerform.controls['confirmpassword'].setErrors(null);
      else
      this.registerform.controls['confirmpassword'].setErrors({mismatch:true});

    }

}
