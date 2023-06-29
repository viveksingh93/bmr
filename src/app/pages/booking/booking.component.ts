import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingArray: any[] = [];
  timeArray: any[] = [];
  roomsArray: any[] = [];
  userDetails: any;
  bookingObj: any;

  constructor(private http: HttpClient) {
    debugger;
    const localData = localStorage.getItem('loogedUserData'); //  userLogin
    if (localData != null) {
      this.userDetails = JSON.parse(localData);
      debugger;
      this.getRoomsList();
      this.bookingObj = { id: this.userDetails.id };
    }
  }
  cha(val: any) {
    console.log(val);
  }
  ngOnInit(): void {
    this.bookingObj = {
      id: 0,
      roomId: 0,
      clientId: 0,
      bookingDate: '2023-06-29T05:24:34.229Z',
      fromTime: 0,
      toTime: 0,
    };
    this.getTimeList();
  }

  getTimeList() {
    this.http
      .get('https://localhost:7143/api/Time/GetTimeList')
      .subscribe((res: any) => {
        this.timeArray = res.data;
        this.getAllBooking();
      });
  }

  getRoomsList() {
    debugger;
    this.http
      .get(
        'https://localhost:7143/api/Room/GetAllRoomsByClientId?id=' +
          this.userDetails.clientId
      )
      .subscribe((res: any) => {
        debugger;
        this.roomsArray = res.data;
      });
  }
  // Model Open
  openBooking() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  // Model close
  closeBooking() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  saveBooking() {
    debugger;
    this.http
      .post(
        'https://localhost:7143/api/Bookings/CreateBooking',
        this.bookingObj
      )
      .subscribe((response: any) => {
        debugger;
        if (response.result) {
          alert('Booking Done');
          this.getAllBooking();
        } else {
          alert('Booking Not Completed');
        }
      });
  }
  getAllBooking() {
    this.http
      .get(
        'https://localhost:7143/api/Bookings/GetAllBookingsByClientId?id=1'
      )
      .subscribe((res: any) => {
        debugger;
        this.bookingArray = res.data;
      });
  }

  checkIfRoomBooked(roomId: number, timeId: number): boolean {
    const bookingDate = this.bookingArray.find(
      (m) => m.roomId == roomId && (m.fromTime == timeId || m.toTime == timeId)
    );
    if (bookingDate) {
      return true;
    } else {
      return false;
    }
  }
}
