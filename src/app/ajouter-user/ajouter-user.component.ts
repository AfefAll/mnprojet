import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {

  constructor(private service:OrderDetailsService , private router:Router) { }

  ngOnInit(): void {

  }
addUser(f:any){
this.service.onAddNewUser(f).then(()=>{
  console.log("Ajouter avec succes");
  setTimeout(() => {
    this.router.navigate(["/home"])
  }, 500);
}).catch((err)=>{
  console.log(err);
  
})
}
}
