import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonTodoService {
  todolist:any=[];
  todolist1:any=[];
  public TodoLists: BehaviorSubject<any> = new BehaviorSubject([]);
  public todolists1: BehaviorSubject<any>=new BehaviorSubject([]);
  public todolists2: BehaviorSubject<any>= new BehaviorSubject([]);
  constructor() { }
  setValue(data:any){
    this.todolist.push(data);
    this.TodoLists.next(this.todolist);
  }
  getValue(){
    return this.TodoLists;
  }
  setValue1(data:any){
    this.todolists1.next(data);
  }
  getValue1(){
    return this.todolists1;
  }
  setEdit(data:any){
    
    this.todolists2.next(data);
  }
  getEdit(){
    return this.todolists2;
  }

}
