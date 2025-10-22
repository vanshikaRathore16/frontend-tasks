import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   message = "hello from service"
  //  constructor(private http : HttpClient){}
  //  getProduct(){
  //   return this.http.get("https://dummyjson.com/products");
  //  }
   getMessage() : string{
    return "hello from service"
   }
}
