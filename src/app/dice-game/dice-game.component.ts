import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-game',
  templateUrl: './dice-game.component.html',
  styleUrls: ['./dice-game.component.css']
})
export class DiceGameComponent implements OnInit {
  public number:number=0;
  constructor() { }

  ngOnInit(): void {
  }
 roll(){
  this.number= Math.floor(Math.random()*6)+1;
 }
}
