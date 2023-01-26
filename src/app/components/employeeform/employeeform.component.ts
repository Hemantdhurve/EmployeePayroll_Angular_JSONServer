import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {

  }
  navEmpData(){
    this.router.navigate(['/employeedata'])
  }

}
