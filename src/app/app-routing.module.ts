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
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { CarcompanyComponent } from './carcompany/carcompany.component';
import { DiceGameComponent } from './dice-game/dice-game.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { ReloadComponent } from './reload/reload.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { NavigateComponent } from './navigate/navigate.component';
import { CartComponent } from './cart/cart.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Products1Component } from './products1/products1.component';
import { Navigate1Component } from './navigate1/navigate1.component';
import { Cart1Component } from './cart1/cart1.component';
import { RatingComponent } from './rating/rating.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',canActivate:[AuthenticationGuard], component: DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'databinding', component: DataBindingComponent},
    {path:'cal', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'BMI', component: BMIComponent },
    {path:'directives', component:DirectivesComponent},
    {path:'event', component:EventComponent},
    {path:'students', component:StudentsComponent},
    {path:'carcompany', component:CarcompanyComponent},
    {path:'Dice', component:DiceGameComponent},
    {path:'pipes', component: PipesComponent},
    {path:'shopping',component:ShoppingComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'bank', component:BankaccountsComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'email', component:EmailComponent},
    {path:'reload', component:ReloadComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'create-bankaccount', component:CreateBankaccountsComponent},
    {path: 'create-user', component: CreateUserComponent},
    {path:'employee-details', component:EmployeeDetailsComponent},
    {path: 'vehicle-details/:id', component:VehicleDetailsComponent},
    {path:'account-details/:id', component:BankAccountDetailsComponent},
    {path:'edit-vehicle/:id' , component: CreateVehicleComponent},
    {path:'edit-account/:id', component:CreateBankaccountsComponent},
    {path: 'parent', component:ParentComponent},
    {path:'products', component:ProductsComponent},
    {path:'navigate', component: NavigateComponent},
    {path: 'cart-list', component: CartComponent},
    {path:'parent1', component:Parent1Component},
    {path: 'child1' , component:Child1Component},
    {path:'products1', component:Products1Component},
    {path:'navigate1', component:Navigate1Component},
    {path:'cart1', component:Cart1Component},
    {path:'rating', component:RatingComponent},
  ]},
  {path:'', component: LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
