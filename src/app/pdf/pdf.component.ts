import { formatNumber } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit , ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
nameoffile:any=""
text:any=""
upload=document.getElementById('upload')
outputt=document.getElementById('output')

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  changeListener($event:any) : void {
    this.readThis($event.target);
  }

  complete :any = new EventEmitter();
  
  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];     
    var myReader:FileReader = new FileReader();

    myReader.onloadend = function(e){
      // you can perform an action with readed data here
      console.log(myReader.result);
    }    
    console.log(myReader.readAsText(file)); 
  }

  resultSet:any; // dont need it 

 loadFileAsText($event:any){
    var fileToLoad = $event.files[0];  
    var fileReader = new FileReader();
    fileReader.onload = function(){
      fileReader.result
    };  
  }

}
