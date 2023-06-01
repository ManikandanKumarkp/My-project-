import { Component } from '@angular/core';
import { IEmployeeService } from '../iemployee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  providers:[IEmployeeService]
})
export class EmployeeListComponent {
employees: any[];
selectedradiobuttonvalue:string='All';

constructor(){
  this.employees=[
    { code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
    { code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
    { code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
    { code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
    { code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'}
 
  ];
}
getTotalEmployeesCount():number{
  return this.employees.length;
}
getMaleEmployeesCount():number{
  return this.employees.filter(e => e.gender==='Male').length;
}
getFemaleEmployeesCount():number{
  return this.employees.filter(e => e.gender==='Female').length;
}
}
