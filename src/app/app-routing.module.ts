import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './pages/packages/packages.component';
import { ClientComponent } from './pages/client/client.component';
import { UsersComponent } from './pages/users/users.component';
import { PackagesActivationComponent } from './pages/packages-activation/packages-activation.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ClientAdminDashboardComponent } from './pages/client-admin-dashboard/client-admin-dashboard.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { ClientUserDashboardComponent } from './pages/client-user-dashboard/client-user-dashboard.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [
  {
    path: '',
     component: LoginComponent
  },
  {
    path:'',
    component: HomeComponent,  // Super Admin
    children:[
    {
        path: 'Package',
        component: PackagesComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'Package-Activation',
        component: PackagesActivationComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
      }
    ]
  },
  {
    path: '',
    component: ClientLayoutComponent,   //  client Admin    
    children: [
      {
        path: 'client-dashboard',
        component: ClientAdminDashboardComponent
      },
      {
        path: 'room',
        component: RoomsComponent

      },
      {
        path: 'client-users',
        component: UsersComponent
      },
      {
        path:'booking',
        component:BookingComponent 
      }
    ]
  },
  {
    path:'',
    component:UserLayoutComponent,   // user Role
    children:[
      {
        path:'user-dashboard',
        component:ClientUserDashboardComponent 
      },
      {
        path:'user-booking',
        component:BookingComponent 
      }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
