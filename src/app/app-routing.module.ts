import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'databinding', component: DataBindingComponent},
    {path:'cal', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'BMI', component: BMIComponent }
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
