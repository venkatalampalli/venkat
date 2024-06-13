import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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
