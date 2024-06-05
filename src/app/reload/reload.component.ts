import { Component, OnInit } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  public images:any=[];
  constructor(private _reloadService:ReloadService) { 
    _reloadService.getReload().subscribe(
      (data:any)=>{
        this.images=data.data.memes;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }

  ngOnInit(): void {
  }

}
