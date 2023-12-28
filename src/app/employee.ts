export interface Employee {
code:String;
name:String
gender:String;
annualsalary:Number;
dateofbirth:String;


}

export class Employee implements Employee {
 public code:String;
  public name:String; 
  public gender:String; 
  public annualsalary:Number;
  public dateofbirth:String ;
  
  constructor( code:String, name:String, gender:String, annualsalary:Number, dateofbirth:String, ) 
{
this.code=code;
this.name=name;
this.gender=gender;
this.annualsalary=annualsalary;
this.dateofbirth=dateofbirth;
  }
}
