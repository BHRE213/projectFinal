import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareddataService } from '../services/shareddata.service';
import { SitedataService } from '../services/sitedata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedhttp : ShareddataService,public sitehttp : SitedataService) { }

  ngOnInit(): void {
  }

}
