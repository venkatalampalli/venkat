import { Component, OnInit } from '@angular/core';
import { CommonTodoService } from '../common-todo.service';

@Component({
  selector: 'app-check-todo',
  templateUrl: './check-todo.component.html',
  styleUrls: ['./check-todo.component.css']
})
export class CheckTodoComponent implements OnInit {
  public checkTodos:any= [];
  constructor(private _commonTodoService:CommonTodoService) {
    _commonTodoService.getValue1().subscribe(
      (data:any)=>{
        this.checkTodos=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
