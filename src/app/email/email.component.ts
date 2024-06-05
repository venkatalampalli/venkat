import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public emails:any=[];
  constructor (private _emailService:EmailService) { 
    _emailService.getEmails().subscribe(
      (data:any)=>{
        this.emails=data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )

  }

  ngOnInit(): void {
  }

}
