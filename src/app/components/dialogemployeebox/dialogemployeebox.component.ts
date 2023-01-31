import { Component, OnInit,Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-dialogemployeebox',
  templateUrl: './dialogemployeebox.component.html',
  styleUrls: ['./dialogemployeebox.component.scss']
})
export class DialogemployeeboxComponent implements OnInit{
  dialogForm!:FormGroup;
  submitted=false;
  deptArray:any=[];
  id:Number=0;
  name:string='';
  profileImage:string='';
  department:any=[];
  gender:string='';
  salary:Number=0;
  date:any;
  inputnotes:string='';
  
  constructor(private formBuilder:FormBuilder,private empservice:EmployeeserviceService,private dialogRef:MatDialogRef<DialogemployeeboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
      console.log('getting data', data)

      this.id=data?.id
      this.name=data?.name
      this.profileImage=data?.profileImage,
      this.department=data?.department,
      this.gender=data?.gender,
      this.salary=data?.salary,
      this.date=data?.date,
      this.inputnotes=data?.inputnotes
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      department:this.formBuilder.array([]),
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      inputnotes: ['', [Validators.required]],

    })
    this.updatePatch();
    this.getDeptList();
  }
  get f() { return this.dialogForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.dialogForm.valid) {
      let data={
        name: this.dialogForm.value.name,
        profileImage: this.dialogForm.value.profileImage,
        department: this.dialogForm.value.department,
        gender: this.dialogForm.value.gender,
        salary: this.dialogForm.value.salary,
        date: this.dialogForm.value.date,
        inputnotes: this.dialogForm.value.inputnotes,
        id:this.dialogForm.value.id
      }
      this.empservice.updateEmployee(this.id,data).subscribe((response:any)=>{
        console.log("Details Updated Successfully",response)
      })
    }
  }

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
 
    const department: FormArray = this.dialogForm.get('department') as FormArray;
 
     if (isChecked) {
       department.push(new FormControl(id));
     } else {
       const index = department.controls.findIndex(x => x.value === id);
       department.removeAt(index);
     }
    }

  updatePatch():void{
    this.dialogForm.patchValue({
      name:this.data?.name,
      profileImage:this.data?.profileImage,
      department:this.data?.department,
      gender:this.data?.gender,
      salary:this.data?.salary,
      date:this.data?.date,
      inputnotes:this.data?.inputnotes
    })
  }
}
