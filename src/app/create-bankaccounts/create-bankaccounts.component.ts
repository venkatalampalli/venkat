import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-create-bankaccounts',
  templateUrl: './create-bankaccounts.component.html',
  styleUrls: ['./create-bankaccounts.component.css']
})
export class CreateBankaccountsComponent implements OnInit {
  public bankform:FormGroup= new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),

    }
  )
  constructor( private _acocuntServices: BankaccountsService) { }

  ngOnInit(): void {
  }
  create(){
    this._acocuntServices.createaccount(this.bankform.value).subscribe(
      (data:any)=>{
        alert("Account Created Successfully!!!!");
        location.reload();
      },
      (error:any)=>{
        alert("invalid credentialls");  
      }
    )
  }

}
