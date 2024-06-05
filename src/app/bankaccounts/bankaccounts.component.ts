import { Component, OnInit } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit {
 public bankaccounts:any=[];
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

}
