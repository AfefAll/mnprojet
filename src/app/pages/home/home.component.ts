import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderDetailsService} from 'src/app/services/order-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Produit:any
Add:any


  constructor(private service:OrderDetailsService,private http:HttpClient, private router:Router) {
    this.afficheAdd().then(data=>{
      this.Add=data
    })
   }
  ngOnInit(): void {

    this.service.glaceDetails().then(prod=>{
      this.Produit=prod
    }).catch(error=>{
      console.log(error)
    })

  }



onGetUsers()
{
  this.http.get("http://localhost:3000/Produit").subscribe((res)=>{
  this.Produit=res
  console.log("voici les utilisateurs "+ JSON.stringify(res) )
  })
}
afficheAdd(){
return new Promise((resolve,reject)=>{
  this.http.get("http://localhost:3000/Add").subscribe((res)=>{
    this.Add=res
    resolve(res)
  })
})
}





}
