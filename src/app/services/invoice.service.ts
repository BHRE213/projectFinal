import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }
  invoiceOrders:any =[]

  userInvoiceOrders(data: any) {
    this.http.post('https://localhost:44341/api/Order/GetOrderById/', data)
      .subscribe((res: any) => {
        this.invoiceOrders = res;
      }, err => {
      })
  }

  
  updateUserOrderToDone(body: any) {  
    this.http.put('https://localhost:44341/api/Order/UpdateOrserStatusToDone/', body).subscribe((res) => {      
      }, err => {       
      })
    }
}
