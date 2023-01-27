import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice/dataservice.service';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.scss']
})
export class EmployeedataComponent implements OnInit {

  searchbarhide=false
  empArray:any=[];
  subscription:any;
  message:any;
  searchname:any;

  constructor(private router:Router,private empservice:EmployeeserviceService,private dataservice:DataserviceService){}

  ngOnInit(): void {
    this.getAllEmployee();
    this.subscription=this.dataservice.currentMessage.subscribe(message=>{
      this.message=message;
    //now storing the data in the variable
    this.searchname=message.dataResult[0];
    console.log(this.searchname);
    })
  }

  showsearch(){
    if(this.searchbarhide==false){
      this.searchbarhide=true
    }
    else{
      this.searchbarhide=!this.searchbarhide
    }
  }
  getAllEmployee(){
    return this.empservice.getEmployee().subscribe((response:any)=>{
      this.empArray=response
      console.log("Retrived all Employees",response)
    })
  }
   
  deleteEmployee(id:any){
    return this.empservice.deleteEmployee(id).subscribe((response:any)=>{
      console.log('Entry Deleted Successfully')
    })
  }

  searchName(event: any) {
    let searchResult = {
      type: 'search',
      dataResult: [event.target.value]
    }
    return this.dataservice.changeMessage(searchResult)
  }


  navEmpForm(){
    this.router.navigate(['/employeeform'])
  }
}
