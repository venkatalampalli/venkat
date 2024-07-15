import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  @Input() num1:any=null;
  @Input() num2:any=null;
  result:any=null;
  clearIt: any= null;
  @Output() clear:EventEmitter<any>= new EventEmitter();
  constructor( private _calculatorService:CalculatorService) { }

  ngOnInit(): void {
  }
  sum(){
   
    this.result=this.num1+this.num2;
    this._calculatorService.setValue(this.result);
    this.remove();
  }
  sub(){
    this.result=this.num1-this.num2;
    this._calculatorService.setValue(this.result);
    this.remove();

  }
  mul(){
    this.result=this.num1*this.num2;
    this._calculatorService.setValue(this.result);
    this.remove();

  }
  div(){
    this.result=this.num1/this.num2;
    this._calculatorService.setValue(this.result);
    this.remove();

  }

  remove(){
    this.clear.emit(this.clearIt);
  }

}
