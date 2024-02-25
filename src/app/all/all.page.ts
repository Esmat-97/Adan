import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-all',
  standalone:true,
  imports:[CommonModule,IonicModule],
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {


  constructor(private httpcliet:HttpClient , private router:Router) {}

  goto(){
    this.router.navigate(['/all'])
  }
 
  adan:any[]=[];

  filter:any[]=[];

  day:string=new Date().toLocaleDateString();
  date:number=new Date().getUTCMonth()+1;


  ngOnInit(){
  this.fetchdata();
  }

  fetchdata(){
   this.httpcliet.get(`https://api.aladhan.com/v1/calendarByCity?city=Cairo&country=EG&method=2&month=${this.date }&year=2024`).subscribe((y:any)=>{
    this.adan=y.data
    this.filter=this.adan
    console.log(this.adan[0]);
    console.log(this.date);

 
   })
  }



}
