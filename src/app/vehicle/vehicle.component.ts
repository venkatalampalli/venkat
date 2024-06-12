import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
   
  public vehicles:any=[];

  public term:string="";
  public page:number=1;
  public col:string="";
  public order:string="";

  constructor( private _vehicleService:VehicleService , private _router: Router) { 

_vehicleService.getVehicles().subscribe(
  (data:any)=>{
    this.vehicles=data;
  },
  (err:any)=>{
    alert("internal server error");
  }
)
  }  
  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getfilteredVehicles(this.term ,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("internal server error");
      }
    )
  }
  paged(){
    this._vehicleService.getpagedVehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("internal server error");
      }
    )
  }
  sort(){
    this._vehicleService.getsortedVehicles(this.col , this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("internal server error");
      }
    )
  }
  delete(id:string){
    this._vehicleService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  view(id:string){
    this._router.navigateByUrl('/dashboard/vehicle-details/'+id)
  }
edit(id:string){
  this._router.navigateByUrl('/dashboard/edit-vehicle/'+id)

}
}
