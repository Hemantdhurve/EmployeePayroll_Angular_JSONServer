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
