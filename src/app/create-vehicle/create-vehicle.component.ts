import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleFormGroup:FormGroup= new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      cost: new FormControl()
    } 
  )
  public id:string="";

  constructor( private _vehicleServices: VehicleService ,private _activatedRoute:ActivatedRoute) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        _vehicleServices.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleFormGroup.patchValue(data);
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
      console.log(this.vehicleFormGroup)
      this._vehicleServices.createVehicle(this.vehicleFormGroup.value).subscribe(
        (data:any)=>{
          alert("created successfully!!!");
        },
        (erroe:any)=>{
          alert("invalid");
        }
      )
    }
  }
  edit(){
    this._vehicleServices.editVehicle(this.id,this.vehicleFormGroup.value).subscribe(
      (data:any)=>{
        alert("Updated sucessfully!!!");
      },
      (error:any)=>{
        alert("error")
      }
    )
  }

}
