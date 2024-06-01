import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carcompany',
  templateUrl: './carcompany.component.html',
  styleUrls: ['./carcompany.component.css']
})
export class CarcompanyComponent implements OnInit {
  public company:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
