
import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpserviceService) { }

  //creating services 

  addEmployee(data:any){
    return this.http.PostService(data)
  }

  getEmployee(){
    return this.http.GetService();
  }

  deleteEmployee(id:any){
    return this.http.DeleteService(id)
  }

  updateEmployee(id:any,data:any){
    return this.http.UpdateService(id,data)
  }
}
