import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss'],
})
export class EmployeeformComponent implements OnInit{

  employeeform!:FormGroup;
  submitted=false;
  hr:any;
  deptArray:any=[]; 
  id:Number=0;
  deptname:any;
  checked:boolean=true;

  

  constructor(private router:Router,private formBuilder:FormBuilder,private empservice:EmployeeserviceService){}

  ngOnInit(): void {
    this.employeeform = this.formBuilder.group({
      name: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      department: this.formBuilder.array([]),
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      inputnotes: ['', [Validators.required]],

    })
    this.getDeptList();
  }
  get f() { return this.employeeform.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.employeeform.valid) {
      // console.log("submit works")
      // let payload = {
      //   name: this.employeeform.value.name,
      //   profileImage: this.employeeform.value.profileImage,
      //   gender: this.employeeform.value.gender,
      //   salary: this.employeeform.value.salary,
      //   day: this.employeeform.value.day,
      //   month: this.employeeform.value.month,
      //   year: this.employeeform.value.year,
      //   inputnotes: this.employeeform.value.inputnotes,
      // }
      // this.empservice.addEmployee(payload).subscribe((response:any)=>{
      //     console.log("Employee Data added Successfully",response)
      //   })
    }
  }
  //get department

  getDeptList(){
    this.deptArray=[
      {id:1,deptname:'HR',checked:false},
      {id:2,deptname:'Sales',checked:false},
      {id:3,deptname:'Finance',checked:false},
      {id:4,deptname:'Engineer',checked:false},
      {id:5,deptname:'Other',checked:false},
    ]
}
  onChange($event:any){
   const id=$event.target.value;
   const isChecked=$event.target.checked;
   const deptname=$event.target.name;
   console.log(id,isChecked,deptname)

   const department: FormArray = this.employeeform.get('department') as FormArray;

    if (isChecked) {
      department.push(new FormControl(id));
    } else {
      const index = department.controls.findIndex(x => x.value === id);
      department.removeAt(index);
    }
  //  const empArray=this.employeeform.get(this.deptArray) as FormArray
  //  if(this.deptArray.indexOf()){
  //   push(new FormControl(isChecked))
  //  }
  //  else{

  //  }
  }

  datasubmit(){
    console.log("submit works")
    let payload = {
      name: this.employeeform.value.name,
      profileImage: this.employeeform.value.profileImage,
      department: this.employeeform.value.department,
      gender: this.employeeform.value.gender,
      salary: this.employeeform.value.salary,
      date: this.employeeform.value.date,
      inputnotes: this.employeeform.value.inputnotes,
    }
    this.empservice.addEmployee(payload).subscribe((response:any)=>{
        console.log("Employee Data added Successfully",response)
      })
  }
  navEmpData(){
    this.router.navigate(['/employeedata'])
  }

}
