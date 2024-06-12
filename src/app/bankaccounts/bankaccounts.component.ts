import { Component, OnInit } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';
import { Router } from '@angular/router';

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
  constructor( private _bankservice:BankaccountsService ,private _router: Router) {
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
        alert("Deleted Successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  view(id:number){
this._router.navigateByUrl('/dashboard/account-details/'+id);
  }
  edit(id:number){
    this._router.navigateByUrl('/dashboard/edit-account/'+id);

  }
}
