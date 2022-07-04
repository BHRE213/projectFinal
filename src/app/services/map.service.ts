import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  pharmacyData: any = [];
  constructor(private http: HttpClient) { }


  getAll(){
    this.http.get('https://localhost:44341/api/PharmacyBranches/GetALLPharmacyBranches/').subscribe((res) => {
      this.pharmacyData = res;  
    }, err => {   
    
    })    
  }

  getPharmacyByName(data:any){
    this.http.post('https://localhost:44341/api/PharmacyBranches/GetPharmacyByName/',data).subscribe((res) => {
      this.pharmacyData = res;  
      console.log(this.pharmacyData)
    }, err => {   
    
    })    
  }
}
