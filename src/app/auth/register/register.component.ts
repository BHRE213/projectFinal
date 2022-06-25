import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
=======
>>>>>>> origin/main

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
    registerform:FormGroup=new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    username : new FormControl('',[Validators.required]),
    name : new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
     }) 
  constructor(private router: Router) { }
=======

  constructor() { }
>>>>>>> origin/main

  ngOnInit(): void {
  }

<<<<<<< HEAD
  submit(){
    console.log(this.registerform.value);
    
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

=======
>>>>>>> origin/main
}
