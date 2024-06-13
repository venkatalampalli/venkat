import { Component, OnInit } from '@angular/core';
import { Common1Service } from '../common1.service';

@Component({
  selector: 'app-navigate1',
  templateUrl: './navigate1.component.html',
  styleUrls: ['./navigate1.component.css']
})
export class Navigate1Component implements OnInit {
  public cartcount:number=0;
  constructor (private _commonService1 : Common1Service) { 
    _commonService1.getCart().subscribe(
      (data:any)=>{
        this.cartcount= data;
      }
    )
  }

  ngOnInit(): void {
  }

}
