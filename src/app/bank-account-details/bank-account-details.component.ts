import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent implements OnInit {
  public bankaccount: any ={};
  constructor(private _activatedRoute: ActivatedRoute, private _bankAccountService: BankaccountsService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _bankAccountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.bankaccount=data;
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
