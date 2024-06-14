import { Component, OnInit } from '@angular/core';
import { CommonTodoService } from '../common-todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  public viewTodos:any=[];
  constructor(private _commonTodoService:CommonTodoService, private _router:Router) { 
    _commonTodoService.getValue().subscribe(
      (data:any)=>{
        this.viewTodos=data;

      }
    )
  }

  ngOnInit(): void {
  }
  edit(i:number){
    this._commonTodoService.setEdit(this.viewTodos[i]);
  }

view(i:number){

  this._commonTodoService.setValue1(this.viewTodos[i]);
}
delete(i:number){
  this.viewTodos.splice(i,1);
}
}
