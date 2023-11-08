import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { HttpClientModule } from '@angular/common/http';
import { GuestListComponent } from './guest-list/guest-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { FormsModule } from '@angular/forms';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { HomeComponent } from './home/home.component';
import { ReserveListComponent } from './reserve-list/reserve-list.component';
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { UpdateReserveComponent } from './update-reserve/update-reserve.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StaffListComponent } from './staff-list/staff-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    GuestListComponent,
    CreateGuestComponent,
    UpdateGuestComponent,
    HomeComponent,
  
    ReserveListComponent,
       CreateReserveComponent,
       UpdateReserveComponent,
       LoginComponent,
       RegisterComponent,
       StaffListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
