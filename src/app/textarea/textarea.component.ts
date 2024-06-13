import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
@Input() public max:any=null;
count: any = null;
input: any =null;
  constructor() { }

  ngOnInit(): void {
  }
click(){
  return this.count=this.input.length;
}

}
