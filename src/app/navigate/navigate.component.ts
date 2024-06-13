import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
 public cartcount:any=null;
  constructor(private _commonService: CommonService) { 
    _commonService.getValue().subscribe(
      (data:any)=>{
        this.cartcount=data;
      }
    )
  }

  ngOnInit(): void {
  }

}
