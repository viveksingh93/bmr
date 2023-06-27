import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ClientComponent } from './pages/client/client.component';
import { UsersComponent } from './pages/users/users.component';
import { PackagesActivationComponent } from './pages/packages-activation/packages-activation.component';
import  {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ClientAdminDashboardComponent } from './pages/client-admin-dashboard/client-admin-dashboard.component';
import { ClientUserDashboardComponent } from './pages/client-user-dashboard/client-user-dashboard.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { BookingComponent } from './pages/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    ClientComponent,
    UsersComponent,
    PackagesActivationComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    ClientAdminDashboardComponent,
    ClientUserDashboardComponent,
    ClientLayoutComponent,
    RoomsComponent,
    ClientDashboardComponent,
    HomeComponent,
    UserLayoutComponent,
    BookingComponent
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
