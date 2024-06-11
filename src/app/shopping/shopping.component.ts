import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
 public products:any[]=[
  {sno:'1',productname:'pen',price:10,rating:'3',freedelivery:true},
  {sno:'2',productname:'Phone',price:100,rating:'2',freedelivery:false},
  {sno:'3',productname:'shirt',price:400,rating:'4',freedelivery:true},
  {sno:'4',productname:'cap',price:200,rating:'5',freedelivery:false},
  {sno:'5',productname:'mobile care',price:300,rating:'2',freedelivery:true},
  {sno:'6',productname:'remote',price:400,rating:'2.5',freedelivery:false},

 ];
 
 public name:string='';
 public price:number=0;
 public rating:number=0;
 public freedelivery:any=null;
 public searchit:string='';
  constructor() { }

  ngOnInit(): void {
  }
  addcart(){
    let  product:any={
      productname:this.name,
      price:this.price,
      rating:this.rating,
      freedelivery:this.freedelivery
    }
    this.products.push(product);
    this.name='';
    this.price=0;
    this.rating=0;
    this.freedelivery=null;
  }

  lowp(){
    this.products=this.products.sort((a:any,b:any)=> a.price-b.price);
    
  }
  highp(){
    this.products=this.products.sort((a:any,b:any)=> b.price-a.price);

  }
  lowr(){
    this.products=this.products.sort((a:any,b:any)=> a.rating-b.rating);
  }
  highr(){
    this.products=this.products.sort((a:any,b:any)=> b.rating- a.rating);
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*0.5;
      return product;
    });
  }
  deliverycharges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+20;
      return product;
    });
  }
  totalprice(){
    let totalprice=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalprice);
  }
  delete(i:number){
    this.products.splice(i,1);

  }

totalcart()
{
  let length:any=this.products.length;
  alert(length);
}

only() {
  this.products = this.products.filter(product => product.freedelivery==true);
}
search(){
  this.products=this.products.filter(product=>product.productname.includes(this.searchit));
}

}
