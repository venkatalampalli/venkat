import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  public items:any=[];

 
  public categories:string="men's clothing";
  constructor( private _flipkartService:FlipkartService) {

    _flipkartService.getFlip().subscribe(

    (data:any)=>{
      this.items=data;
    },
    (error:any)=>{
      alert("page not found");
    }   
    )

   }

  ngOnInit(): void {
  }

  menclothing(){
    this.items=this.items.filter((item:any)=> item.category=="men's clothing");
    
  }
  jewellery(){
    this.items=this.items.filter((item:any)=> item.category=="jewelery");
  }
  womenclothing(){
    this.items=this.items.filter((item:any)=> item.category=="women's clothing");
  }
  price1(){
    this.items=this.items.filter((item:any)=> item.price>=7 && item.price<=50);
  }
  price2(){
    this.items=this.items.filter((item:any)=> item.price>50 && item.price<=300);
  }
  price3(){
    this.items=this.items.filter((item:any)=> item.price>300 && item.price<=600);
  }
  price4(){
    this.items=this.items.filter((item:any)=> item.price>600 && item.price<=100);
  }


}
