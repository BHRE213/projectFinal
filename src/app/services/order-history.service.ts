import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: HttpClient) { }

  orders: any = [];

  userOrderHistory(data: any) {
    this.http.post('https://localhost:44341/api/Order/GetUserOrdesHistory/', data)
      .subscribe((res: any) => {
        this.orders = res;
      }, err => {
      })
  }
}
