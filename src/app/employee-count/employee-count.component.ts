import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.sass']
})
export class EmployeeCountComponent {
@Input() all:number;
@Input() male:number;
@Input() female:number;

selectedRadioButtonValue:string='All';
@Output()
countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

onRadioButtonSelectionChang(){
this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
}
}
