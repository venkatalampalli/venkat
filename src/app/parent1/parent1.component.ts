import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
public ap:string="";
public bp:string="";
  constructor() { }

  ngOnInit(): void {
  }
catch(value:any){
  this.bp=value;
}
}
