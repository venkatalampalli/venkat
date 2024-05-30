import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public age:number = 20;
  public name:string="venkat";
  public isIndian:boolean=true;

  public isValid:boolean=true;

  public phone:string='+91  ';
  constructor() { }

  ngOnInit(): void {
    
  }
  upload(){
    alert("submitted sucessfully");
  }
  send(){
    alert("sent successfully");
  }
  change(){
    alert("Data Changed!!!!");
  }
}
