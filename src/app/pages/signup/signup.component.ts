import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupUser: any[] = [];
  signupUserObj: any = {
    userName: '',
    email: '',
    password: '',
    role: ''
  };

  ngOnInit(): void {
    const localdata = localStorage.getItem('signupUser');
    if (localdata != null) {
      this.signupUser = JSON.parse(localdata);
    }
  }


  onSignUp() {
    debugger
    this.signupUser.push(this.signupUserObj)
    debugger
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    this.signupUserObj = {
      userName: '',
      email: '',
      password: '',
      role: ''
    };
  }

}
