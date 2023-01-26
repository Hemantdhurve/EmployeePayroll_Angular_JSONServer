import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedataComponent } from './components/employeedata/employeedata.component';
import { EmployeeformComponent } from './components/employeeform/employeeform.component';

const routes: Routes = [
  { path: '', redirectTo: '/employeedata', pathMatch: 'full' }, 
  {path:'employeeform',component:EmployeeformComponent},
  {path:'employeedata',component:EmployeedataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
