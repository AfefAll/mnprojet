import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  success:String="" 
  problem:String=""


  constructor(private http:HttpClient,private router:Router,private service :OrderDetailsService) { }

  ngOnInit(): void {
  }
  signIn(p:any){   
  this.service.onLogin(p).then((res)=>{
   this.success=res 

  }).then(()=>{
    setTimeout(() => {
      this.router.navigate(["/home"])
    }, 500);
  })
  .catch((err)=>{
    this.problem=err
  })

  }
    }