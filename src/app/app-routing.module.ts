import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
{ path:'home',component:AppComponent},
{ path:'employees',component:EmployeeListComponent},
{ path:'employees/:code',component:EmployeeComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},

];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
