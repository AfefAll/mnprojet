import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-prod',
  templateUrl: './ajouter-prod.component.html',
  styleUrls: ['./ajouter-prod.component.css']
})
export class AjouterProdComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) {



   }

  ngOnInit(): void {
  }
 onPostProduit(p:any){
this.http.post("http://localhost:3000/glace_Details",p).subscribe(res=>{})

 }



}
