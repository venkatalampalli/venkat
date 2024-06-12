import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';
import { ActivatedRoute } from '@angular/router';

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
  public id:any=null;
  constructor( private _acocuntServices: BankaccountsService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        _acocuntServices.getAccount(this.id).subscribe(
          (data:any)=>{
            this.bankform.patchValue(data);
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }
  create(){
    if(this.id){
      this.edit();
    }
    else{
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
  edit(){
    this._acocuntServices.editaccount(this.id,this.bankform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
      },
      (error:any)=>{
        alert("error");
      }
    )
  }

}
