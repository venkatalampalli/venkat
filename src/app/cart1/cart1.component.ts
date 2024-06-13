import { Component, OnInit } from '@angular/core';
import { Common1Service } from '../common1.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {
  public cartcount:number=0;
  constructor(private _commonService1 : Common1Service) {
    _commonService1.getCart().subscribe(
      (data:any)=>{
        this.cartcount=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
