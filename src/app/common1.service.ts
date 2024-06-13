import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Common1Service {

  constructor() { }
  public cart1:any=0;
  public cart:BehaviorSubject<any>=new BehaviorSubject(0);

  setCart(){
    this.cart1=this.cart1+1;
    this.cart.next(this.cart1);
  }
  getCart(){
   return this.cart;
  }
}
