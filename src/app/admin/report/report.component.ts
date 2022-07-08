import { Component, OnInit } from '@angular/core';
import { OrdderService } from 'src/app/services/ordder.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  month : any ;
  year : any ;
  time = new Date();
  constructor(public order:OrdderService) { }

  ngOnInit(): void {
    this.order.getAll();

  }
annualreport()
{
document.getElementById("annualdiv")?.style.display;
}
monthlyreport()
{
  document.getElementById("monthlydiv")?.style.display;

}
}
