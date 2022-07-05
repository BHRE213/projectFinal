import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedicineCategoryService } from './medicine-category.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  constructor(private http: HttpClient,private toastr: ToastrService) { }


}
