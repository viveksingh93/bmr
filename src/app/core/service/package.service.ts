import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }


  getAllPackages(){
    
   return this.http.get('https://localhost:7143/api/Package/GetPackage');
  }

  addNewPackage(obj:any){
    
    return this.http.post('https://localhost:7143/api/Package',obj);
  }
  getPackageById(PackageId: number){
    
    return this.http.get('https://localhost:7143/api/Package/'+ PackageId);
  }

  updatePackage(PackageId: number, obj: any){
      
    return this.http.put('https://localhost:7143/api/Package/updatePackage?id='+PackageId,obj);
  }
  deletePackageById(PackageId: number){
    debugger
    return this.http.delete('https://localhost:7143/api/Package/deletePackageById?id='+PackageId)
  }
//   Login services
  Login(obj:any){
    debugger
    return this.http.get('https://localhost:7143/api/User/UserLogin?userName='+obj.userName+"&password="+obj.password);
   }

}
