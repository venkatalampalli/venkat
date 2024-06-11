import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup= new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()
    }
  )
  constructor(private _loginService: LoginService , private _router :Router) {
    
  
    

   }

  ngOnInit(): void {
  }
  login(){
    this._loginService.getLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login Successfull!!!");
        sessionStorage.setItem('my-app-token',data.token);
        this._router.navigateByUrl('/dashboard');
      },
      (error:any)=>{
        alert("invalid Email/password");
      }
    )
  }
  onsubmit(){
    // this._loginService.getLogin(this.loginForm.value).subscribe(
    //   response=>{
    //     alert("login successfull!!!");
    //   },
    //   error=>{
    //     alert("invalid username or passwrod")
    //   }
    // )
    console.log(this.loginForm.value);
    
  }

}
