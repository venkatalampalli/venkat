import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 public count:any=0;
 public countSub: BehaviorSubject<any> = new BehaviorSubject(0);
  constructor() { }

  setValue(){
    this.count=this.count+1;
    this.countSub.next(this.count);
  }
  getValue(){
    return this.countSub;
  }
}
