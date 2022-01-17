import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data:any;
  constructor(private service:OrderDetailsService , private router:Router ,private http:HttpClient) { 
    this.service.glaceDetails().then(()=>{
    this.data=this.service.prod
    console.log(this.data);
    }) 
  }
  
  ngOnInit(): void {
  }
  supprimerBtn(id:number){
    this.http.delete("http://localhost:3000/glace_Details/" +id  ).subscribe((res)=>{
      console.log(res);
      setTimeout(()=>{
        this.router.navigate(["/home"])
      },1500)
     })
    
    }




    buyBtn(){
      
    }











  }

  














