import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  isLoggedIn: any;
  role: any;
  
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token');
    this.role = localStorage.getItem('role')
  }
  logout() {
    localStorage.clear()
    this.router.navigate(['auth/login'])
  }

  toInvoice(){
    this.router.navigate(['user/invoice'])
  }
  toCheckout(){
    this.router.navigate(['user/checkout'])
  }
  toOrdersHistory(){
    this.router.navigate(['user/orderHistory'])
  }
  toProfile(){
    this.router.navigate(['user/Profile'])    
  }

}
