
import { Router } from '@angular/router';
import { MedicineService } from '../services/medicine.service';
import { ShareddataService } from '../services/shareddata.service';
import { SitedataService } from '../services/sitedata.service';
import { Component, OnInit , ElementRef, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  fileString:any;
  complete :any = new EventEmitter();
  constructor(public medicineService: MedicineService,public sitedata:SitedataService  ,private router:Router,public elementRef: ElementRef) { }
  name:any='';
file:any 
  ngOnInit(): void {
    this.medicineService.getAll();
  }

    
  enterName(name:any){   
    this.name=name.target.value;
  }

  search()
  {
    const searches={
      name: this.name.toString()
    };
    if(searches.name.length == 0){
      window.location.reload();
    }else {  this.medicineService.searchByName(searches)}   
  }

  openSingelPage(id:any){
    this.medicineService.medicineId=id;
    console.log('id',id)
    this.router.navigate(['singleMedicine'])
  }
  s(name :any)
  {
    const searches={
      name: name.toString()
    };
    if(searches.name.length == 0){
      window.location.reload();
    }else {  this.medicineService.searchByName(searches)}   
  }

  resultSet:any; // dont need it 

  changeListener1($event: any) {
    var file:File = $event.target.files[0];
   
    var reader:FileReader = new FileReader();
    reader.readAsText(file);
    var resultSet:any = [];
    var columns :any
   
    reader.onload = () => {
        console.log(reader.result)
        this.file=reader.result;
        const searches={
          name: this.file
        };
        if(searches.name.length == 0){
          window.location.reload();
        }else {  this.medicineService.searchByName(searches)} 
       
    }
   
  }
        
    
       
      
       
      
      
      }
