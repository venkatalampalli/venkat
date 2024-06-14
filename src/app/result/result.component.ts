import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public result:any=null;
  constructor( private _calculatorService: CalculatorService) { 
    _calculatorService.getValue().subscribe(
      (data:any)=>{
       this.result=data;
      }
    )
  }

  ngOnInit(): void {
  }


}
