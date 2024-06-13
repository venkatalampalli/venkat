import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
@Input()  public rating:any=null;

  constructor() { }

  ngOnInit(): void {
  }


}
