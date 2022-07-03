import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
  
    
    const fileread = new FileReader();

    fileread.readAsText(file[0]);
    
    this.text.value=fileread.result
    
  }
}
