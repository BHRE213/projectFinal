import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { NgxSpinnerService } from 'ngx-spinner';
import { InvoiceService } from '../../services/invoice.service';
import jspdf from 'jspdf';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, public invoiceService: InvoiceService) { }

  useraccountid: any = localStorage.getItem('id')
  totalPrice: any = 0;
  dateNow = new Date();

  ngOnInit(): void {
    this.spinner.show();
    this.invoiceService.userInvoiceOrders({
      useraccountid: Number(this.useraccountid),
      orderstatesid: 21
    })

    setTimeout(() => {  
      setTimeout(() => {          
        this.spinner.hide();
      }, 1000);   
      this.total();
    }, 1500);
  }

  total() {
    for (let i = 0; i < this.invoiceService.invoiceOrders.length; i++) {
      this.totalPrice += (this.invoiceService.invoiceOrders[i].price * this.invoiceService.invoiceOrders[i].quantity)
    }
  }

  title = 'html-to-pdf-angular-application';
  public convetToPDF() {
    this.invoiceService.updateUserOrderToDone({
      useraccountid: Number(this.useraccountid)
    })
    var data: any = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 400;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('l', 'mm', 'a5'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('invoice.pdf'); // Generated PDF
    });
  }
}
