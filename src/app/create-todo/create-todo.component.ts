import { Component, OnInit } from '@angular/core';
import { CommonTodoService } from '../common-todo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ViewTodoComponent } from '../view-todo/view-todo.component';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  public todoForm:FormGroup= new FormGroup({
    task: new FormControl(),
    date: new FormControl()
  })
  public id:any=null;
  constructor(private _commonTodoService:CommonTodoService ,private _activatedRoute: ActivatedRoute ) {
 
      _commonTodoService.getEdit().subscribe(
        (data:any)=>{
          this.todoForm.patchValue(data);
        }
      )
    
    
    
  }

  ngOnInit(): void {
  }
  create(){

  
      this._commonTodoService.setValue(this.todoForm.value);

    
  }
  reset(){
    this.todoForm.reset();
  }
  edit(){
    
  }

}
