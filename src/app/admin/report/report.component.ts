import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { OrdderService } from 'src/app/services/ordder.service';
import Chart from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { UseraccountService } from 'src/app/services/useraccount.service';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  constructor(private medicin:MedicineService,public orders:OrdderService,private spinner: NgxSpinnerService,private user:UseraccountService) { }
  date: any = Date();
  startdate=""
  enddate=""

  inCartOrders =0;
  inCheckOutOrders=0;
  inPayedOrders=0;

  ngOnInit(): void {
    this.orders.getAll();   
    this.user.getAll();
    this.medicin.getAll();
   
    this.spinner.show();
    setTimeout(() => {
      this.chartdata();
    }, 1500);

    setTimeout(() => {


      const barChart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: ['Payed Orders', 'Incart Orders', 'To CheckedOut',],

          datasets: [{
            label: 'Number Of',
            data: [this.inPayedOrders,this.inCartOrders,this.inCheckOutOrders],
            backgroundColor: [
          
             'rgba(73, 165, 250, 0.8)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              
              'rgba(5, 5, 5, 1)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1.5
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      const pieChart = new Chart("pieChart", {
        type: 'pie',
        data: {
          labels: ['Payed Orders', 'Users','All Mediciens'],
          datasets: [{
            label: '# of Votes',
            data: [ this.inPayedOrders, this.user.allusers.length,this.medicin.medicineData.length],
            backgroundColor: [
          
              'rgba(73, 165, 250, 0.8)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              
              'rgb(73, 165, 250)',
              'rgb(75, 192, 192)',
              'rgb(255, 159, 64)',
            ],
            borderWidth: 1.5
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      this.spinner.hide()
    }, 3000);
  }


  search()
  {
    const searches={    
      
      start: this.startdate,
      end: this.enddate
    };
    console.log(this.startdate,this.enddate,'dsssssssssssssssssssssssssssssssss')
    if(searches.start.length == 0 && searches.end.length==0){
      window.location.reload();
    }
    else if(searches.start.length == 0 && searches.end.length!=0)
    
    {  const m={ 
      start: null,
      end: this.enddate}
    this.orders.searchByaDate(m)}
    else if(searches.start.length != 0 && searches.end.length==0)
    {  const n={
      start: this.startdate}
      this.orders.searchByaDate(n)}
    else if(searches.start.length != 0 && searches.end.length!=0)
    
    {  this.orders.searchByaDate(searches)
      window.location.reload();
    }
     
  }

  
  title = 'html-to-pdf-angular-application';
  public convetToPDF() {
    var data: any = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 400;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('new-file.pdf'); // Generated PDF
    });
  }


  chartdata(){
    for (let i = 0; i < this.orders.allorder.length; i++) {
      if(this.orders.allorder[i].states=='incart'){
        this.inCartOrders++;
      }else if (this.orders.allorder[i].states=='checkedout'){
          this.inCheckOutOrders++;
      
    }else if (this.orders.allorder[i].states=='done'){
      this.inPayedOrders++;
  }
      
    }
   
  }

}
