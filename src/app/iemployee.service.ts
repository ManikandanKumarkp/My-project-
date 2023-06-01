import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class IEmployeeService {
getemployees[]:IEmployee[]{
  return [
{ code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
{ code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
{ code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
{ code:'emp101',name:'mani',gender:'male', annualsalary:1200,dateofbirth:'6/25/1997'},
  ];
}
  constructor() { }
}
