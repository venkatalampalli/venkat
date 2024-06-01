import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
 public name:string='';
 public names:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  register(){
  this.names.push(this.name);
  this.name='';
  }
  deletelast(){
    this.names.pop()
  }
  delete(i:number){
    this.names.splice(i,1);
  }
  deleteall(){
    this.names=[];
  }

  salutation(){
    this.names= this.names.map(name=> `Mr.${name}`);
  }

  
  atoz(){
    this.names=this.names.sort();
  }
  ztoa(){
    this.names=this.names.sort().reverse();
 
}
}
