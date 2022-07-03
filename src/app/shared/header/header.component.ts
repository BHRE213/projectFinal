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
    this.router.navigate(['invoice'])
  }
  toCheckout(){
    this.router.navigate(['checkout'])
  }
  toOrdersHistory(){
    this.router.navigate(['orderHistory'])
  }
  toProfile(){
    this.router.navigate(['userProfile'])    
  }

}
