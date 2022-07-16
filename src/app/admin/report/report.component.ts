import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { OrdderService } from 'src/app/services/ordder.service';
import Chart from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  constructor(public orders:OrdderService,private spinner: NgxSpinnerService) { }
  date: any = Date();
  startdate="";
  enddate="";

  ngOnInit(): void {
    this.orders.getAll();
    this.spinner.show();
    setTimeout(() => {


      const barChart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: ['Payed Orders', 'Incart Orders', 'To CheckedOut',],

          datasets: [{
            label: 'Number Of',
            data: [this.orders.allorder.length,this.orders.allorder.length,this.orders.allorder.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
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
          labels: ['parent', 'children', 'buses',],
          datasets: [{
            label: '# of Votes',
            data: [ this.orders.allorder.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
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
    }, 2500);
  }

  
  search()
  {
    const searches={    
      
      start: this.startdate,
      end: this.enddate
    };
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
    
    {  this.orders.searchByaDate(searches)}
     
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
}
