import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Clients: any[] = [];
  userObj = {
    'id': 1,
    'clientId': 0,
    'userName': '',
    'password': '',
    'isActive': true,
    'role': '',
  }
  userList: any[] = [];
  loogedUserData: any;
  constructor(private http: HttpClient) {
    debugger
    const localData = localStorage.getItem("loogedUserData")//  userLogin
    if (localData != null) {
      this.loogedUserData = JSON.parse(localData);
      if (this.loogedUserData.role == 'ClientAdmin') {
        this.getAllUsers();
      } else {
        this.getAllUserByClient();
      }
    }
  }
  ngOnInit(): void {
    //this.getAllClients()
    this.getAllUsers()
  }

  getAllUsers() {
    debugger
    this.http.get('https://localhost:7143/api/User/GetAllUser').subscribe((Response: any) => {
      debugger
      this.userList = Response.data;
    })
  }

  getAllUserByClient() {
    this.http.get('https://localhost:7143/api/User/GetAllUsersByClientId?id=' + this.loogedUserData.clientId).subscribe((Response: any) => {
      this.userList = Response.data;
    })
  }

  
  getAllClients() {
    debugger
    this.http.get('https://localhost:7143/api/Client/GetAllClient').subscribe((Response: any) => {
      debugger
      this.userList = Response.data
    })
  }
  
  onSaveUser(){
    debugger
    this.http.post('https://localhost:7143/api/User/CreateUser',this.userObj ).subscribe((Response:any)=>{
      debugger
      if(Response.result){
        if(this.loogedUserData.role=='Admin'){
          this.getAllUsers();
          //this.getAllClients()
        }else{
          this.getAllUserByClient();
          this.userObj.clientId=this.loogedUserData.clientId;
        }
      }
      else{
        alert(Response.message)
      }
    })
  }


}
