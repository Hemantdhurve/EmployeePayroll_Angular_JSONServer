import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private messageSource=new BehaviorSubject({type:'',dataResult:[]});
  currentMessage=this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:any){
    this.messageSource.next(message);
  }
}
