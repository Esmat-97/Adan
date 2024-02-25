import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  imports:[CommonModule,IonicModule],
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  adan:any[]=[];

  filter:any[]=[];

  day:number=new Date().getDate();
  date:number=new Date().getUTCMonth()+1;

  constructor(private httpcliet:HttpClient) {}
  ngOnInit(){
  this.fetchdata();
  }

  fetchdata(){
   this.httpcliet.get(`https://api.aladhan.com/v1/calendarByCity?city=Cairo&country=EG&method=2&month=${this.date }&year=2024`).subscribe((y:any)=>{
    this.adan=y.data
    this.filter=this.adan
    console.log(this.adan[0]);
    console.log(this.date);

                                         
    this.filter = this.adan.filter((item:any)=>item.date.gregorian.day ==this.day )
    console.log(this.filter)
   })
  }



}
