import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeForm:FormGroup= new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    experience: new FormGroup({
      company: new FormControl(),
      exp: new FormControl(),
      package: new FormControl(),
      
    }) ,
    projecttype: new FormControl(),
    skills: new FormArray([])
  })

  get skillsFormArray(){
    return this.employeeForm.get('skills') as FormArray;
  }
  addskills(){
    this.skillsFormArray.push(
      new FormGroup({
        skill: new FormControl(),
        rating: new FormControl(),
        expinskill: new FormControl()
      })
    )
  }
  constructor() { 
    this.employeeForm.get('projecttype')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='Internal'){
          this.employeeForm.addControl('int' ,new FormControl());
          this.employeeForm.removeControl('ext');
        }
          else if(data=="External"){
            this.employeeForm.addControl('ext' ,new FormControl());
            this.employeeForm.removeControl('int');


          }

        }
      
    )
  }

  ngOnInit(): void {
  }
submit(){
  console.log(this.employeeForm.value);
}
}
