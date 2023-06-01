import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})

export class EmployeeTitlePipesPipe implements PipeTransform {

  transform(value: String, gender:String): String {
    if (gender.toLowerCase()=="male")
    return "Mr." + value;
    else
    return "Miss." + value;
  }

}
