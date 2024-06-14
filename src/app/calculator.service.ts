import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public summSub:BehaviorSubject<any>=new BehaviorSubject(null);

  constructor() { }
  setValue(data:any){
    this.summSub.next(data);
  }
  getValue(){
    return this.summSub;
  }
}
