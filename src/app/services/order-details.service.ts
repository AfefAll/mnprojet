import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  public prod:any[]=[]
  constructor(private http:HttpClient) { }
glaceDetails(){
 return new Promise((res,rej)=>{
  this.http.get("http://localhost:3000/glace_Details").subscribe((data)=>{
    let d:any=data
    this.prod=d
    res(data)
   })
 }) 
   

}


}
