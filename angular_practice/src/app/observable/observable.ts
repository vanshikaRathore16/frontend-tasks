import { Component } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { of,from,tap } from 'rxjs';
import { map } from 'rxjs';
@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css'
})
export class Observable1 {
    ngOnInit(){
      const obj = new Observable((subscribe)=>{
        subscribe.next("hello");
        subscribe.next("world");
        subscribe.complete();
      })

      obj.subscribe({
        next : (value)=>console.log(value),
        error : err => console.log(err),
        complete :()=>console.log("is completed")
      })

      of(1,2,3,4).pipe(
        map(num => num*2)
      ).subscribe(item=>console.log(item));
      of("vashika").pipe(
       tap((name)=> console.log(name)),
       map(name => name.toUpperCase()),
       tap((name)=>console.log(name))
      ).subscribe(value=> console.log(value));

      from(fetch("https://jsonplaceholder.typicode.com/users")).subscribe(responce => console.log(responce));
    }
}
