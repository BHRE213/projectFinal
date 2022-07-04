import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: ['./user-map.component.css']
})
export class UserMapComponent implements OnInit {

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

  constructor(public mapService: MapService, private spinner: NgxSpinnerService) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: this.x,
        lng: this.y,
      }
    });
  }


  ngOnInit(): void {
    this.spinner.show();
    this.mapService.getAll()
    setTimeout(() => {
      this.addMarkers();
      this.spinner.hide();
    }, 2000);
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

