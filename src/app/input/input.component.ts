import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  num1:any=null;
  num2:any=null;
  constructor() { }

  ngOnInit(): void {
  }
  catch(value:any){
    this.num1=value;
    this.num2=value;
  }
}
