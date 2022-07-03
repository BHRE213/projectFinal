import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }
  checkoutOrders: any = [];
  cardData: any = [];

  userCheckoutOrders(data: any) {
    this.http.post('https://localhost:44341/api/Order/GetOrderById/', data)
      .subscribe((res: any) => {
        this.checkoutOrders = res;
        console.log('sadddddddddd',this.checkoutOrders)
      }, err => {
      })
  }
  getUserCardData(data: any) {
    this.http.post('https://localhost:44341/api/Order/GetCardUserData/', data)
      .subscribe((res: any) => {
        this.cardData = res;
      }, err => {
      })
  }

  decreaseMedicenQuantity(data: any) {
    this.http.post('https://localhost:44341/api/Medicine/DecreaseMedicenQuantity/', data)
      .subscribe((res: any) => {
      }, err => {
      })
  }

  updateUserCartToPaid(body: any) {  
    this.http.put('https://localhost:44341/api/Order/UpdateOrserStatusToPaid/', body).subscribe((res) => {
      
      }, err => {       
      })
    }

    updateCardBalance(body: any) {  
      this.http.put('https://localhost:44341/api/Order/UpdateBalance/', body).subscribe((res) => {       
        }, err => {       
        })
      }

     returnStatusToIncard(body: any) {  
        this.http.put('https://localhost:44341/api/Order/ReturnStatusToIncart/', body).subscribe((res) => {
          
          }, err => {       
          })
        }
}
