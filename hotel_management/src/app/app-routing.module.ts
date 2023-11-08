import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestListComponent } from './guest-list/guest-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { HomeComponent } from './home/home.component';
import { ReserveListComponent } from './reserve-list/reserve-list.component';
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { UpdateReserveComponent } from './update-reserve/update-reserve.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  {path: 'guests', component: GuestListComponent},
  {path: 'create-guest', component: CreateGuestComponent},
  //{path: '', redirectTo:'guests',pathMatch:'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateGuestComponent},
  {path:'home',component:HomeComponent},
  {path:'reserve',component:ReserveListComponent},
  {path:'addreserve',component:CreateReserveComponent},
  {path: 'update-reserve/:id', component: UpdateReserveComponent},
  {path:'staff',component:StaffListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
