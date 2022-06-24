import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [ Validators.required]);
  passFormControl = new FormControl('', Validators.minLength(6));

  constructor(private router:Router, public authService: AuthService) { }

  login(){
    this.authService.login(this.emailFormControl.value, this.passFormControl.value);
  }
  goToRegister(){
    this.router.navigate(['register']);
  }
  ngOnInit(): void {
  }

}
