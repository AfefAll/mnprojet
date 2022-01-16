import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  verifier:any
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    this.service.ok$.subscribe((res)=>{
      this.verifier=res
    })


  }
  logout(){
    this.service._verifier.next(false)
    this.verifier=false

  
  }




}
