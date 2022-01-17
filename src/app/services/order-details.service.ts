import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  public prod:any[]=[]
  _verifier=new Subject()
  ok$=this._verifier.asObservable()

  public adresse:any[]=[]



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
onLogin(p:any):Promise<String>
{
  return new Promise((resolve,reject)=>
  {
    this.http.get<Users[]>("http://localhost:3000/user").subscribe(utilusateurs=>
    {
        for(let i=0; i<utilusateurs.length;i++)
        {
          if (p.email==utilusateurs[i].email)
          {
            console.log("email correct")
            //resolve("email correct")
            if(p.password==utilusateurs[i].password)
            {
              console.log("password correct")
              this._verifier.next(true)
              resolve("password and email correct")
              break
            }else
            {
            console.log("password incorrect")
            reject("email correct and password incorrect")
            break
          }
        } else if (i==utilusateurs.length-1 && p.email!=utilusateurs[i].email)
          {
            console.log("email incorrect")
            reject("email incorrect")
          }
        }
      })
    })
}
onAddNewUser(f:any){
  return new Promise((resolve, reject) =>{
    this.http.post("http://localhost:3000/user",f).subscribe((res)=>{
      this._verifier.next(true)
      resolve(res)
    })
  })
}



adresseVente(){
  return new Promise((resolve,reject)=>{
   this.http.get("http://localhost:3000/adresseVente").subscribe((data)=>{
     let a:any=data
     this.adresseVente=a
     resolve(data)
    })
  }) 
 }








}



