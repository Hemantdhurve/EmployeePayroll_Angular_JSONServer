
import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice/httpservice.service';
import { IaddEmployee, IdeleteEmployee, IupdateEmployee } from './typeservicefile';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpserviceService) { }

  //creating services without using Type or Interface

  // addEmployee(data:any){
  //   return this.http.PostService(data)
  // }

  // getEmployee() {
  //   return this.http.GetService();
  // }

  // deleteEmployee(id: any) {
  //   return this.http.DeleteService(id)
  // }

  // updateEmployee(id: any, data: any) {
  //   return this.http.UpdateService(id, data)
  // }

  //Creating services using Types or Interface

  addEmployee(data: IaddEmployee) {
    return this.http.PostService('posts', data, false, {})
  }

  getEmployee() {
    return this.http.GetService('posts', false, {});
  }

  deleteEmployee(idData:IdeleteEmployee) {
    return this.http.DeleteService('posts/',idData, false, {})
  }

  updateEmployee(id:Number,data: IupdateEmployee) {
    return this.http.UpdateService('posts/'+id, data, false, {})
  }
 
}
