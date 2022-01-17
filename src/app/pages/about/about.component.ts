import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data:any;
  constructor(private service:OrderDetailsService) {
    this.service.adresseVente().then((d)=>{
      this.data=d
      console.log(this.data +"aaaaaa");
    })
    
   }

  ngOnInit(): void {
  }

}
