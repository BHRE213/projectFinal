import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class OrdderService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  allorder: any = [];
  checkMedicine: any = [];
  ordersInCart:any = [];

  getAll() {
    this.http.get('https://localhost:44341/api/order/GetAllOrder').subscribe((res) => {
      this.allorder = res;  
    }, err => { 
      this.toastr.error(err.message, err.status)
    })


  }
  deleteorder(id: number) {
    this.http.delete('https://localhost:44341/api/Order/deleteOrder/' + id).subscribe((res) => {  
      this.toastr.info('order removed ');
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })
  }

  acceptorder(id: number) {
    this.http.get('https://localhost:44341/api/Order/AcceptOrder/' + id).subscribe((res) => {
     
    }, err => {
      this.toastr.error(err.message, err.status)
    })
  }

  rejectorder(id: number) {
    this.http.get('https://localhost:44341/api/Order/RejectOrder/' + id).subscribe((res) => {
     
    }, err => {
      // this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })
  }


  createOrder(data: any) {
    this.http.post('https://localhost:44341/api/Order/createOrder/', data)
      .subscribe((res: any) => {
        this.toastr.success('Added To Cart ✔️ ')
      }, err => {
        this.toastr.error(err.message, err.status)
      })
  }


  checkMedicineInCart(data: any) {
    this.http.post('https://localhost:44341/api/Order/CheckMedicineInCart/', data)
      .subscribe((res: any) => {
        this.checkMedicine = res;
      }, err => {
      })
  }

  updateMedicineInCart(body: any) {  
    this.http.put('https://localhost:44341/api/Order/UpdateMedicineInCart/', body).subscribe((res) => {
      this.toastr.success(' Cart Updated ✔️ ')         
      }, err => {       
      })
    }


  userCartOrders(data: any) {
    this.http.post('https://localhost:44341/api/Order/GetOrderById/', data)
      .subscribe((res: any) => {
        this.ordersInCart = res;
      }, err => {
      })
  }

  updateUserCartToCheckout(body: any) {  
    console.log(body.start)
    console.log(body.end)
    this.http.put('https://localhost:44341/api/Order/UpdateOrserStatusToCheckout/', body).subscribe((res) => {
      
      }, err => {       
      })
    }

    searchByaDate(body: any){
      this.http.post('https://localhost:44341/api/Order/GetOrderBettwenTwoDates', body).subscribe((res) => {
      this.allorder=res
      this.toastr.success('Data Retrieved !!');
      }, err => {   
         this.toastr.error(err.message, err.status)    
      })
    }
    incrementOrder(body: any){
      this.http.post('https://localhost:44341/api/Order/increaseCartItem', body).subscribe((res) => {

      }, err => {   
         this.toastr.error(err.message, err.status)    
      })
    }
    decrementOrder(body: any){
      this.http.post('https://localhost:44341/api/Order/decreaseCartItem', body).subscribe((res) => {
     
      }, err => {   
         this.toastr.error(err.message, err.status)    
      })
    }


}

