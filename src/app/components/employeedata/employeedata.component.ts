import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice/dataservice.service';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { IdeleteEmployee } from 'src/app/services/typeservicefile';
import { DialogemployeeboxComponent } from '../dialogemployeebox/dialogemployeebox.component';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.scss']
})
export class EmployeedataComponent implements OnInit {

  searchbarhide=false
  empArray:object=[];
  subscription:any;
  message:any;
  searchname:string='';
  deptArray:object=[];
  department:object=[];

  constructor(private router:Router,private empservice:EmployeeserviceService,private dataservice:DataserviceService,public dialog: MatDialog){}

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
    return this.empservice.getEmployee().subscribe((response:Object)=>{
      this.empArray=response
      console.log("Retrived all Employees",this.empArray)
      // this.deptArray = this.empArray.filter((response: any) => {
      //   this.department = response.department
      //   console.log('Finally getting department Array',this.department)

      // })
    })
  }
   
  deleteEmployee(idData:IdeleteEmployee){
    return this.empservice.deleteEmployee(idData).subscribe((response:Object)=>{
      console.log('Entry Deleted Successfully',response)
      this.getAllEmployee();
    })
  }

  searchName(event: any) {
    let searchResult = {
      type: 'search',
      dataResult: [event.target.value]
    }
    return this.dataservice.changeMessage(searchResult)
  }

  //dialog open

  openDialog(empObj:object) {
    const dialogRef = this.dialog.open(DialogemployeeboxComponent,{
      data:empObj
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  navEmpForm(){
    this.router.navigate(['/employeeform'])
  }
}
