import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 @Input()  public ac:string="";
          public bc:string= "";
  @Output() public bEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
event(){
  this.bEvent.emit(this.bc);
}
}
