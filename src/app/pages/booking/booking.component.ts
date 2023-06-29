import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingArray:any[]=[];
  timeArray: any[] = [];
  roomsArray: any[] = [];
  userDetails: any;
  bookingObj = {
    'Id': 0,
    'RoomId': 0,
    'UserId': 0,
    'bookingDate': '',
    'fromTime': 0,
    'toTime': 0,
    'createDate': ''

  }
  constructor(private http: HttpClient) {
    const localData = localStorage.getItem("loogedUserData")//  userLogin
    if (localData != null) {
      this.userDetails = JSON.parse(localData);
      this.getRoomsList();
    }
  }
  ngOnInit(): void {
    this.getTimeList();
    this.getAllBooking();
  }

  getTimeList() {
    this.http.get('https://localhost:7143/api/Time/GetTimeList').subscribe((res: any) => {
      this.timeArray = res.data;
    })
  }

  getRoomsList() {

    this.http.get('https://localhost:7143/api/Room/GetAllRoomsByClientId?id=' + this.userDetails.clientId).subscribe((res: any) => {
      this.roomsArray = res.data;


    })
  }
     // Model Open
  openBooking() {
    const model = document.getElementById('myModal')
    if (model != null) {
      model.style.display = 'block';
    }
  }
    // Model close
  closeBooking() {
    const model = document.getElementById('myModal')
    if (model != null) {
      model.style.display = 'none';
    }
  }

  saveBooking() {
    this.http.post(' ', this.bookingObj).subscribe((res: any) => {
      if (res.result) {
        alert('Booking Done')
        this.getAllBooking();
      }
      else{
        alert('Booking Not Completed')
      }
    })
  }
  getAllBooking(){
    this.http.get('getallbookingclientById').subscribe((res:any)=>{
      this.bookingArray=res.data;
    })
  }

  checkIfRoomBooked(RoomId:number, timeId:number){
     const bookingDate=this.bookingArray.find(m=>m.RoomId==RoomId&& (m.fromTime==timeId || m.toTime==timeId));
     if(bookingDate){
      return true;
     }
     else{
      return false;
     }
  }
}
