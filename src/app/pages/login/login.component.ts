import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/core/service/package.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  packageArray: any[] = [];
  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private packagesrv: PackageService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadPackages();
  }
  loadPackages() {

    this.packagesrv.getAllPackages().subscribe((Response: any) => {

      this.packageArray = Response.data;
    })
  }

  onLogin() {
    debugger
    this.http.post('https://localhost:7143/api/User/Login', this.loginObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        localStorage.setItem('loogedUserData',JSON.stringify(res.data));
        localStorage.setItem('loogedinUserName',res.data.userName)
        if (res.data.role == 'SuperAdmin') {
          this.router.navigateByUrl('admin-dashboard')
        }
        else if (res.data.role == 'ClientAdmin') {
          this.router.navigateByUrl('client-dashboard')
        }
        else if (res.data.role == 'ClientUser') {
          this.router.navigateByUrl('user-dashboard')
        }
      } else {
        alert(res.message)
      }
    })
  }
}
