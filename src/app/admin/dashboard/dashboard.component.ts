import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MapService } from 'src/app/services/map.service';
import { MedicineCategoryService } from 'src/app/services/medicine-category.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { OrdderService } from 'src/app/services/ordder.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';
import { UseraccountService } from 'src/app/services/useraccount.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  // constructor(public user:UseraccountService,public medicine:MedicineService,public order:OrdderService,public branches:PharmacyService) { }

  // ngOnInit(): void {
  //   this.branches.getAll();
  //   this.medicine.getAll();
  //   this.order.getAll();
  //   this.user.getAll();
  // }

  
  flag: boolean = false;
  name: any = '';
  markers: any = [];
  zoom = 12
  center: google.maps.LatLngLiteral = {
    lat: 32.55730,
    lng: 35.8104338,
  };
  x: number = 32.55730;
  y: number = 35.8104338;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 8,
  }

  constructor(public mapService: MapService, private spinner: NgxSpinnerService,public user:UseraccountService,public medicine:MedicineService,public order:OrdderService,public branches:PharmacyService) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: this.x,
        lng: this.y,
      }
    });
  }


  ngOnInit(): void {
    this.spinner.show();
    this.mapService.getAll();
    this.branches.getAll();
    this.medicine.getAll();
    this.order.getAll();
    this.user.getAll();
    setTimeout(() => {
      this.payedData();
    }, 1000);
    setTimeout(() => {
      this.addMarkers();
      this.spinner.hide();
    }, 2000);
  }

  payed:number=0;
  payedData(){
    for (let i = 0; i < this.order.allorder.length; i++) {
      if(this.order.allorder[i].states=='done'){
        this.payed++;
      }
  }   
     
  }

  addMarkers() {
    for (let i = 0; i < this.mapService.pharmacyData.length; i++) {

      this.markers.push({
        position: {
          lat: Number(this.mapService.pharmacyData[i].x),
          lng: Number(this.mapService.pharmacyData[i].y),
        },
        label: {
          color: 'black',
          text: (this.mapService.pharmacyData[i].name),
        },
        options: { animation: google.maps.Animation.DROP },

      })

    }
    
  }
  enterName(name: any) {
    this.name = name.target.value;
  }

  search() {
    const searches = {
      name: this.name.toString()
    };

    if (searches.name.length == 0) {
      window.location.reload();
    } else {
      this.mapService.getPharmacyByName(searches)
      this.markers.splice(0);
      this.spinner.show();
      this.flag = true;
      setTimeout(() => {
        this.x = Number(this.mapService.pharmacyData.x);
        this.y = Number(this.mapService.pharmacyData.y);
        this.addMarkers();
        this.zoom = 15;
        this.spinner.hide();
      }, 2000);
    }

  }
  
}
