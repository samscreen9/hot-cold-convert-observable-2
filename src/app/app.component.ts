import { Component, OnInit } from '@angular/core';
import{interval,Subject} from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';
  ngOnInit(){
    /*if you subscribe with two different observer each gets different output
    at time */
   let  observable=interval(1000);
   let o11= observable.subscribe(
     //(data)=>{console.log(data+" "+"for one");}
     )
   
   setTimeout(()=>{
      let o12=observable.subscribe(
       //(data)=>{console.log(data+" "+"for two");}
     )
   },2000);
  

   let  s= new Subject();
 
   s.subscribe(
     (data)=>{console.log(data+" "+"one");}
   )
   s.subscribe(
     (data)=>{console.log(data+" "+"two");}
   )
   
   observable.subscribe(s);

  }
  
}
