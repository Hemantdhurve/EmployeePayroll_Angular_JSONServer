import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IaddEmployee, IdeleteEmployee, IupdateEmployee } from '../typeservicefile';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseurl = "http://localhost:3000/"

  constructor(private httpclient: HttpClient) { }

  // PostService(data:any){
  //   return this.httpclient.post<any>(this.baseurl+'posts',data)
  //   .pipe(map((response:any)=>{
  //     return response;
  //   }))
  // }

  // GetService() {
  //   return this.httpclient.get<any>(this.baseurl + 'posts')
  //     .pipe(map((response: any) => {
  //       return response;
  //     }))
  // }
  
  // DeleteService(id: any) {
  //   return this.httpclient.delete<any>(this.baseurl + 'posts/' + id)
  //     .pipe(map((response: any) => {
  //       return response;
  //     }))
  // }

  // UpdateService(id: any, data: any) {
  //   return this.httpclient.put<any>(this.baseurl + 'posts/' + id, data)
  //     .pipe(map((response: any) => {
  //       return response;
  //     }))
  // }

  //Using Type or Interface to get 

  PostService(url: string, data: IaddEmployee, token: boolean = false, headersOptions: any) {
    return this.httpclient.post(this.baseurl + url, data, token && headersOptions)
  }

  GetService(url: string, token: boolean = false, headersOptions: any) {
    return this.httpclient.get(this.baseurl + url, token && headersOptions)
  } 

  DeleteService(url: string,data:IdeleteEmployee, token: boolean = false, headersOptions: any){
    return this.httpclient.delete(this.baseurl+url+data,token && headersOptions)
  }

  UpdateService(url: string,data:IupdateEmployee, token: boolean = false, headersOptions: any){
    return this.httpclient.put(this.baseurl+url,data,token && headersOptions)
  }

  
}
