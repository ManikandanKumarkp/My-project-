import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent {
columnspan:number=2;
firstname:String="mani";
lastname:String="kandan";
gender:String="male";
age:number=20;
showDetails:Boolean=true;

toggleDetails():void {
  this.showDetails=!this.showDetails;
}
}
