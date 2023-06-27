import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  roomArray: any[] = [];
  roomObj = {

    'id': 0,
    'roomName': '',
    'roomLocation': '',
    'roomSeatingCapacity': 0,
    'isRoomActive': true,
    'clientId': 0,
    
  };


  constructor(private http: HttpClient) {
    debugger
    const userData = localStorage.getItem('loogedUserData');
    if (userData != null) {
      const userParseData = JSON.parse(userData)
      this.roomObj.clientId = userParseData.clientId;
      this.loadRoomsByClientId();
    }
  }
  isLoader: boolean = false;

  loadRoomsByClientId() {
    this.http.get('https://localhost:7143/api/Room/GetAllRoomsByClientId?id=' + this.roomObj.clientId).subscribe((res: any) => {
      this.roomArray = res.data;
    })
  }
  createNewRoom(roomForm: NgForm) {
    debugger
    this.http.post('https://localhost:7143/api/Room/CreateRoom', this.roomObj).subscribe((Response: any) => {
debugger
      if (Response.result) {
        this.loadRoomsByClientId();
        alert('Room Created Success')
        roomForm.reset()
      }
      else 
      {
        alert(Response.message)
      }
      debugger
    })

  }

  updateRoom() {

  }

}
