import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.scss']
})
export class EmployeedataComponent implements OnInit {

  searchbarhide=false

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  showsearch(){
    if(this.searchbarhide==false){
      this.searchbarhide=true
    }
    else{
      this.searchbarhide=!this.searchbarhide
    }
  }

  navEmpForm(){
    this.router.navigate(['/employeeform'])
  }
}
