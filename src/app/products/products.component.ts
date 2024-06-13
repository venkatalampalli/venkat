import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
  }
  add(){
    this._commonService.setValue();
  }

}
