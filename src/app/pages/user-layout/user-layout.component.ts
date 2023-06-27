import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent {

  userName: string = ''
  constructor(private router: Router) {
    const Name = localStorage.getItem('loogedinUserName')
    if (Name != null) {
      this.userName = Name
    }
  }
  onLogout(){
    this.router.navigateByUrl('');
  }
}
