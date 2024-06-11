import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

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

  constructor( private _vehicleServices: VehicleService) { }

  ngOnInit(): void {
  }
  create(){
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
