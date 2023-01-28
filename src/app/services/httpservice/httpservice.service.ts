import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseurl="http://localhost:3000/"

  constructor(private httpclient:HttpClient) { }

  PostService(data:any){
    return this.httpclient.post<any>(this.baseurl+'posts',data)
    .pipe(map((response:any)=>{
      return response;
    }))
  }

  GetService(){
    return this.httpclient.get<any>(this.baseurl+'posts')
    .pipe(map((response:any)=>{
      return response;
    }))
  }

  DeleteService(id:any){
    return this.httpclient.delete<any>(this.baseurl+'posts/'+id)
    .pipe(map((response:any)=>{
      return response;
    }))
  }

  UpdateService(id:any,data:any){
    return this.httpclient.put<any>(this.baseurl+'posts/'+id,data)
    .pipe(map((response:any)=>{
      return response;
    }))
  }
}
