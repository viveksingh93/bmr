import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackageService } from 'src/app/core/service/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})

export class PackagesComponent implements OnInit {
  packageArray: any[] = [];
  packageObj = {
    "id": 0,
    "packageName": "",
    "packageCost": "",
    "packageDescription": "",
    "isPackageActive": false
  }

  isLoader:boolean= false

  constructor(private packagesrv: PackageService) { }

  ngOnInit(): void {
    this.loadPackages();
  }
  loadPackages() {
    this.isLoader=true
    this.packagesrv.getAllPackages().subscribe((Response: any) => {
      this.isLoader=false
      this.packageArray = Response.data;
    })
  }


  createPackage(packageform: NgForm) {
    this.isLoader=true
    this.packagesrv.addNewPackage(this.packageObj).subscribe((Response: any) => {
      this.isLoader=false
      if (Response.result) {
        this.loadPackages();
        alert('Package added')
        packageform.reset()
      }
      else {
        alert(Response.message)
      }

    })
  }

  editRecord(id: number) {
    this.packagesrv.getPackageById(id).subscribe((Response: any) => {
      if (Response) {
       this.packageObj=Response;
      }
      else {
        alert(Response.message)
      }
    })
  }

  updatePackage(packageform: NgForm,id : any){
    this.isLoader=true
    this.packagesrv.updatePackage(id,this.packageObj).subscribe((Response:any)=>{
      this.isLoader=false
    if (Response.result) {
      this.loadPackages();
      alert('Package Update Successfully')
      packageform.reset()
    }
    else {
      alert(Response.message)
    }
    })
  }
  onDelete(id:number){
    const isDelete=confirm("Are you sure want to delete")
    if(isDelete){
      this.isLoader=true
      this.packagesrv.deletePackageById(id).subscribe((res:any)=>{
        this.isLoader=false
        if(res){
          this.loadPackages();
          alert('record is deleted succesfully')
        }else{
          alert(res.message)
        }
      })
    }
    
  }
}
