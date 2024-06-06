import { Component, OnInit } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit {
 public bankaccounts:any=[];
 public search:string="";
 public page:number=1;
 public column:string="";
 public order:string="";
  constructor( private _bankservice:BankaccountsService) {
    _bankservice.getAccounts().subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (error:any)=>{
        alert("page not found");
      }
    )

   }

  ngOnInit(): void {
  }
  searchit(){
    this._bankservice.getsearchedAccounts(this.search).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        console.log("internal server error");
      }
    )
  }
  pageno(){
    this._bankservice.getpagedAccounts(this.page).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  sort(){
    this._bankservice.getsortedAccounts(this.column , this.order).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  delete(id:string){
    this._bankservice.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully!!!")
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
}
