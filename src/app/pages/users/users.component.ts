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
    'clientId': 0,
    'userName': '',
    'password': '',
    'isActive': true,
    'role': '',
    'email':'',
    'clientName':''
  }
  userList: any[] = [];
  loogedUserData: any;
  constructor(private http: HttpClient) {
    debugger
    const localData = localStorage.getItem("loogedUserData")//  userLogin
    if (localData != null) {
      this.loogedUserData = JSON.parse(localData);
      if (this.loogedUserData.role == 'Admin') {
        this.getAllUsers();
        this.getAllClients();
      } else {
        this.getAllUserByClient();
        this.userObj.clientId= this.loogedUserData.clientId
      }
    }
  }
  ngOnInit(): void {
    
  }
  getAllUsers() {
    debugger
    this.http.get('https://localhost:7143/api/User/GetAllUser').subscribe((Response: any) => {
      debugger
      this.userList = Response.data;
    })
  }
  getAllUserByClient() {
    debugger
    this.http.get('https://localhost:7143/api/User/GetAllUsersByClientId?id=' + this.loogedUserData.clientId).subscribe((Response: any) => {
    debugger  
    this.userList = Response.data;
    })
  }
  getAllClients() {
    debugger
    this.http.get('https://localhost:7143/api/Client/GetAllClient').subscribe((Response: any) => {
      debugger
      this.Clients = Response.data
    })
  }
  
  onSaveUser(){
    debugger
    this.http.post('https://localhost:7143/api/User/AddUser',this.userObj).subscribe((res:any)=>{
      debugger
      if(res.result){
        debugger
        if(this.loogedUserData.role == 'Admin'){
          debugger
          this.getAllUsers();
          this.getAllClients()
          debugger
        }else{
          this.getAllUserByClient();
          this.userObj.clientId=this.loogedUserData.clientId;
          debugger
        }
      }
      else{
        alert(res.message)
      }
    })
  }


}
