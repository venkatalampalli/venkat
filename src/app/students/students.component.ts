import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public name:string='';
  public marks:number=0;
  public fee:number=0;
  public showtable:boolean=false;

  public students:any=[
    {name:'Venkat',marks:90,fee:20000},
    {name:'Malli',marks:89,fee:10000},
    {name:'Ajay',marks:99,fee:13000},

  ]
  constructor() { }

  ngOnInit(): void {
  }
  register(){
    let student:any={
      name:this.name,
      marks:this.marks,
      fee:this.fee
    }
    this.students.push(student);
    this.name='';
    this.marks=0;
    this.fee=0;
  }
  delete(i:number){
    this.students.splice(i,1);
  }
  pendingfee(){
    let totalfee:number=0;
    totalfee=this.students.reduce((sum:number,student:any)=> sum+student.fee,0);
    alert(totalfee);
  }
  low(){
    
    this.students= this.students.sort((a:any,b:any)=> a.marks-b.marks) ;
  }
  high(){
    
    this.students= this.students.sort((a:any,b:any)=> b.marks-a.marks);
  }
  sal(){
    this.students=this.students.map((student:any)=>{
      student.name='Mr.'+student.name;
      return student;
    })
  }
  show(){
    this.showtable=!this.showtable;
  }
}
